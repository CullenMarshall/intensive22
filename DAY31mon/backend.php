<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {}

    .parent {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: 100vh;
    }

    .boxy {
        width: 100px;
        height: 100px;
        background-color: bisque;
        padding: 2rem;
        justify-content: center;
    }
</style>

<body>
    <div class="parent">
        <div class="boxy"> It's Working <? echo "BoobsYa!"; ?> </div>
    </div>


    <script>
        let boxy = document.querySelector('.boxy');
        boxy.addEventListener('click', function () {
            boxy.style.backgroundColor = 'blue';
        });
    </script>
</body>

</html>