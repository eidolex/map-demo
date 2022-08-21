# Map Demo (Bare)


## Initial Setup
- Clone or download the souce code
- [Register Google API key (Android)](#registering-google-api-key-android)
- [Register Google API key (IOS)](#registering-google-api-key-ios)

### Registering Google API key (Android)
Edit `android/app/src/main/AndroidManifest.xml` line `15` as follows:

```diff
...
-  <meta-data android:name="com.google.android.geo.API_KEY" android:value="_YOUR_API_KEY_"/>
+  <meta-data android:name="com.google.android.geo.API_KEY" android:value="Google map api key"/> // replace _YOUR_API_KEY_
...
```

### Registering Google API key (IOS)

Edit `ios/mapdemo/AppDelegate.mm` line `38` as follows:

```diff
...
-  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"];
+  [GMSServices provideAPIKey:@"Google map api key"]; // replace _YOUR_API_KEY_
...
```