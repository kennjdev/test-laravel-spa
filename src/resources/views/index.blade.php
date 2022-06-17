<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}"/>
    <title>Test</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
  </head>
  <body>

    <div id="app">
      <AppContainer />
    </div>

    <script src="{{asset('js/app.js')}}"></script>
  </body>
</html>