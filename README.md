# FestivalPOS
FestivalPOS is a POS system tailored for small festivals, serving customers in bars, foodshops, etc.
It is designed to be easy to use for non-technical volunteer staff, while supporting many of the features required by small festivals:

* Super fast and friction free transaction flow
* Allow for multiple points of sale with individual statistics
* Buy using predefined customer credit accounts, creditcard using SumUp, and cash payments.
* Receipt printing
* Food order management
* Easily message organizing staff in case of technical issues, supply outages, etc.

The program is used by the local music festival [Kajfest](http://kajfest.dk) on the beatiful island of [Læsø](https://visitlaesoe.dk).
It is made by me and is free and open source - please use it however you want!

## Installation
FestivalPOS is a PWA (Progressive Web App) and is available as a docker container. Type the following command to run an instance:

```
docker run -e SqlServerConnectionString="..." -e RedisConnectionString="..." -e StorageConnectionString="..." -p 5000:80 rmjac/festivalpos
```
Update with a connection string to SqlServer, Redis and an Azure storage account. Redis is only needed for printing.
Then navigate to [localhost:5000]() to see the app running.

## Setting up a dev environment
Clone the repo. Go to src/FestivalPOS and run `npm i` followed by `npm run watch`.
Open the VS solution and run the FestivalPOS project. The app can then be accessed at https://localhost:5001.

## Screenshots

![Sale window](https://github.com/rmja/festivalpos/assets/2112306/a0bdfb3d-7d5e-4598-8b02-69f208805df7)
![Serving window](https://github.com/rmja/festivalpos/assets/2112306/adf726e2-7722-4d25-a30f-42eac86012ec)


## Deploy

```
docker build -f src/FestivalPOS/Dockerfile -t rmjac/festivalpos .
docker push rmjac/festivalpos
```
