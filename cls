warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 2a93b31..1728550 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -2671,6 +2671,11 @@[m
       "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "bootstrap": {[m
[32m+[m[32m      "version": "4.0.0-beta",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.0.0-beta.tgz",[m
[32m+[m[32m      "integrity": "sha512-I/r3fYtUZr+rUNkh8HI+twxZ56p6ehNn27eA1XSebLVQKAJ2xZHnEvZrSR+UR2A/bONcd9gHC3xatVhQlH6R6w=="[m
[32m+[m[32m    },[m
     "brace-expansion": {[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[36m@@ -3003,6 +3008,32 @@[m
       "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "chart.js": {[m
[32m+[m[32m      "version": "2.9.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chart.js/-/chart.js-2.9.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-B07aAzxcrikjAPyV+01j7BmOpxtQETxTSlQ26BEYJ+3iUkbNKaOJ/nDbT6JjyqYxseM0ON12COHYdU2cTIjC7A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chartjs-color": "^2.1.0",[m
[32m+[m[32m        "moment": "^2.10.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chartjs-color": {[m
[32m+[m[32m      "version": "2.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chartjs-color/-/chartjs-color-2.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-haqOg1+Yebys/Ts/9bLo/BqUcONQOdr/hoEr2LLTRl6C5LXctUdHxsCYfvQVg5JIxITrfCNUDr4ntqmQk9+/0w==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chartjs-color-string": "^0.6.0",[m
[32m+[m[32m        "color-convert": "^1.9.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chartjs-color-string": {[m
[32m+[m[32m      "version": "0.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chartjs-color-string/-/chartjs-color-string-0.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-TIB5OKn1hPJvO7JcteW4WY/63v6KwEdt6udfnDE9iCAZgy+V4SrbSxoIbTw/xkUIapjEI4ExGtD0+6D3KyFd7A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "color-name": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "chokidar": {[m
       "version": "3.4.3",[m
       "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.4.3.tgz",[m
[36m@@ -3231,7 +3262,6 @@[m
       "version": "1.9.3",[m
       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",[m
       "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "color-name": "1.1.3"[m
       }[m
[36m@@ -3239,8 +3269,7 @@[m
     "color-name": {[m
       "version": "1.1.3",[m
       "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",[m
[31m-      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="[m
     },[m
     "color-string": {[m
       "version": "1.5.4",[m
[36m@@ -6669,6 +6698,11 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "jquery": {[m
[32m+[m[32m      "version": "3.5.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.5.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-XwIBPqcMn57FxfT+Go5pzySnm4KWkT1Tv7gjrpT1srtf8Weynl6R273VJ5GjkRb51IzMp5nbaPjJXMWeju2MKg=="[m
[32m+[m[32m    },[m
     "js-tokens": {[m
       "version": "4.0.0",[m
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",[m
[36m@@ -7728,6 +7762,11 @@[m
         "minimist": "^1.2.5"[m
       }[m
     },[m
[32m+[m[32m    "moment": {[m
[32m+[m[32m      "version": "2.29.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ=="[m
[32m+[m[32m    },[m
     "move-concurrently": {[m
       "version": "1.0.1",[m
       "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",[m
[36m@@ -8861,6 +8900,11 @@[m
         "ts-pnp": "^1.1.6"[m
       }[m
     },[m
[32m+[m[32m    "popper.js": {[m
[32m+[m[32m      "version": "1.11.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/popper.js/-/popper.js-1.11.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mPwHWRijjT5hcI5pJCM8W4dv6y48v94ANpP5mVX9ZRZPuxWveGmm/VpE/1t5NB7wBA7CtSVsWHlbW1VucbILyQ=="[m
[32m+[m[32m    },[m
     "portfinder": {[m
       "version": "1.0.28",[m
       "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex e4b7f5a..c617655 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -19,6 +19,10 @@[m
     "@angular/platform-browser": "~10.2.0",[m
     "@angular/platform-browser-dynamic": "~10.2.0",[m
     "@angular/router": "~10.2.0",[m
[32m+[m[32m    "bootstrap": "^4.0.0-beta",[m
[32m+[m[32m    "chart.js": "^2.9.4",[m
[32m+[m[32m    "jquery": "^3.5.1",[m
[32m+[m[32m    "popper.js": "^1.11.0",[m
     "rxjs": "~6.6.0",[m
     "tslib": "^2.0.0",[m
     "zone.js": "~0.10.2"[m
