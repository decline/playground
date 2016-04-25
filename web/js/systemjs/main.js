System.config({
    bundles: {
        'js/app/app.js': ['app']
    }
});
System.import('app').then(null, console.error.bind(console));