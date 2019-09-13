package com.whyapps;

import android.app.Application;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.List;
import java.util.Arrays;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.shell.MainReactPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    // @Override
    // protected List<ReactPackage> getPackages() {
    //   @SuppressWarnings("UnnecessaryLocalVariable")
    //   List<ReactPackage> packages = new PackageList(this).getPackages();
    //   // Packages that cannot be autolinked yet can be added manually here, for example:
    //   // packages.add(new MyReactNativePackage());
    //   return packages;
    // }
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new GeolocationPackage(),
            new MapsPackage(),
            new RNGestureHandlerPackage()
        );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}