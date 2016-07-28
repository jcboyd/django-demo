# django-demo

Django is a web application framework for Python. It supplies the developer with development tools, database and web server middleware, and a suite of tools for automating and testing the configuration and tedious parts of setting up a web site.

A Django project consists of a site directory containing top-level settings (**settings.py**, **urls.py**, etc.), and *app* directories for the web application content (<pre>models.py</pre>, **views.py**, **static/**, **templates/**, etc.). Django (roughly) follows a MVC (model-view-controller) approach to web development. The data model (**models.py**) is defined by a set of class definitions, each representing a table in a relational database (**SQLite** by default, but any WSGI-compliant database may be used). Views (which function partially as MVC controllers) are Python classes and functions (defined in **views.py**) that specify what data is to be used to create the dynamic content of each page of the web site. HTML and *static* files (CSS, Javascript, images) are then sidelined to such that the data model and view specifications are decoupled from page design and implementation. Data may be passed from the Python-based views to the HTML pages with a template syntax. Django comes with a Python web server and database backend so that development can begin immediately. The database may be popluated through a shell, or through a configurable *admin* web interface. Updates to the data model are specified in Python and changes *migrated* automatically by Django. Django also provides extensive testing modules. All these features may be controlled with the Django master interface, **manage.py**.

To begin using Django, it is advisable to create a virtual environment. This creates a localised Python environment, segregating the installation and its dependencies. This has several advantages, in particular to avoid dependency clashes between old and new projects, but also to install Python packages locally in the absence of administrator privileges. The most popular virtual environment tool for Python is **virtualenv**. This may be installed with,

<pre>
$ pip install virtualenv
</pre>

In a new folder, we may now create a virtual environment with,

<pre>
$ virtualenv venv
</pre>

This will create a folder venv that contains all the virtual environment files. Activate the virutal environment and install Django with,

<pre>
$ source venv/bin/activate
(venv) $ pip install Django
</pre>

Django will now be installed locally. Note that pip (Pip Installs Packages) can give you a list of the currently installed packages with,

<pre>
$ pip list
</pre>

This list can be exported and used to install all project dependencies elsewhere. Create a new Django project with,

This demo began with the *polling* application in the official Django tutorial ([docs.djangoproject.com/en/1.9/intro/tutorial01/](https://docs.djangoproject.com/en/1.9/intro/tutorial01/)) and applied stylesheets and extends its functionality with some new views and some Javascript. In particular, the primitive results section is replaced with an animated **D3** (data-drive documents) ([https://d3js.org/](https://d3js.org/)) bar chart.

![Front page screenshot](http://jcboyd.github.io/django-demo/django-demo-1.png)

![Front page screenshot](http://jcboyd.github.io/django-demo/django-demo-2.png)
