To run the pager controller from linux, first install the dotnet runtime:

```
sudo apt install dotnet-sdk-7.0
```

The pager controller can then be installed as a global tool using

```
dotnet tool install -g FestivalPOS.PagerController
```

Then, run the controller

```
pager-controller --serial-port XXX
```

The other options can be set in an appsettings.json file in the directory from where the controller is started.