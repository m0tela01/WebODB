# WebODB
An Angular web application to view OBD2 data from a car over an internet connection.


## Web Interface

![la](https://user-images.githubusercontent.com/43968309/56934437-e8e00400-6ab9-11e9-991c-d4cd21b99672.png)


![aa](https://user-images.githubusercontent.com/43968309/56934480-1462ee80-6aba-11e9-8708-44dc6e7a2241.png)

## Install

Do this after cloning.

cd to the folder /WebODBApp and delete the 'node_modules' folder then run:
sudo npm install 

publish the package using 'ng build --prod' on the folder /WebODBApp
copy the 'dist' folder that is generated from above to the /var/www/html/

open the index.html page inside of dist/WebODB and change the ```<href = "/">``` to ```<href = "./">"```

to host it yourself install apache2 and go to /etc/apache2/sites-available and add the path to the dist folder to the .conf file 

ex: 

document root

/var/www/html/dist/
