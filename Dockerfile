FROM node:11 AS webpack
ARG WEBPACK_MODE=production
WORKDIR /src
COPY ["package*.json", "./"]
RUN npm install
COPY . .
RUN node_modules/.bin/webpack --mode ${WEBPACK_MODE}

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["FestivalPOS.csproj", ""]
RUN dotnet restore "FestivalPOS.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "FestivalPOS.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "FestivalPOS.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
COPY --from=webpack /src/wwwroot/dist wwwroot/dist
COPY --from=webpack /src/wwwroot/service-worker.js wwwroot/service-worker.js
ENTRYPOINT ["dotnet", "FestivalPOS.dll"]