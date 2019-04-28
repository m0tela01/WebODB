# WebODB
An Angular web application to view OBD2 data from a car over an internet connection.


## Web Interface

![layout](https://user-images.githubusercontent.com/43968309/56854440-927d9480-6904-11e9-8573-8dfb7271ade9.png)

## Install

Do this after cloning.

cd to the folder /WebODBApp and delete the 'node_modules' folder then run:
sudo npm install 

publish the package using 'ng build --prod' on the folder /WebODBApp
copy the 'dist' folder that is generated from above to the /var/www/html/

open the index.html page inside of dist and change the ```webobd>"whatever is here"</webodb>``` to ```<webodb>"./"</webodb>```

to host it yourself install apache2 and got to /etc/apache2/sites-available and add the location to the dist folder
/var/www/html/dist/
