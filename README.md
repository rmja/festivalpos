# FestivalPOS
FestivalPOS is a POS system tailored for small festivals, serving customers in bars, foodshops, etc.
It is designed to be easy to use for non-technical volunteer staff, while supporting many of the features required by small festivals:

* Super fast and friction free transaction flow
* Allow for multiple points of sale with individual statistics
* Buy using predefined customer credit accounts, creditcard using SumUp (not working yet), and cash payments.
* Easily message organizing staff in case of technical issues, supply outages, etc.

The program is used by the local music festival [Kajfest](http://kajfest.dk) on the beatiful island of [Læsø](https://visitlaesoe.dk).
It is made by me and is free and open source - please use it however you want!

## Installation
FestivalPOS is a PWA (Progressive Web App) and is available as a docker container. Type the following command to run an instance:

```
docker run -e SqlServerConnectionString="..." -e StorageConnectionString="..." -p 5000:80 rmjac/festivalpos
```
Update with a connection string to SqlServer and a connection string to a Azure storage account.
Then navigate to [localhost:5000]() to see the app running.
