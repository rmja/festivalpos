FROM node:12 AS webpack
ARG WEBPACK_MODE=production
WORKDIR /src
COPY ["src/FestivalPOS/package*.json", "./"]
RUN npm install
COPY ["src/FestivalPOS/tsconfig*.json", "src/FestivalPOS/webpack.config.*", "./"]
COPY ["src/FestivalPOS/typings", "./typings"]
COPY ["src/FestivalPOS/src", "./src"]
RUN node_modules/.bin/webpack --mode ${WEBPACK_MODE}

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/FestivalPOS/FestivalPOS.csproj", "src/FestivalPOS/"]
RUN dotnet restore "src/FestivalPOS/FestivalPOS.csproj"
COPY . .
WORKDIR "/src/src/FestivalPOS"
RUN dotnet build "FestivalPOS.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "FestivalPOS.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
COPY --from=webpack /src/wwwroot/dist wwwroot/dist
COPY --from=webpack /src/wwwroot/service-worker.js wwwroot/service-worker.js
ENTRYPOINT ["dotnet", "FestivalPOS.dll"]