<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <link href="bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="images/icon.ico">
        <script src="jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="app.js" type="text/javascript"></script>
        <title>LINKS | Jessica Prieto</title>
        
    </head>
    
    <body>
        
        <!--Navigation Bar-->
        <div class="nav">
            <ul>
                <li class="items"><a href="index.html">Home</a></li>
                <li class="items"><a href="about.html">About</a></li>
                <li class="items"><a href="projects.html">Projects</a></li>
                <li class="items" id="current">LINKS</li>
                <li class="items"><a href="http://misselprup.tumblr.com">Blog</a></li>
                <li class="items"><a href="contacts.html">Contact Info</a></li>
            </ul>        
        </div>
        
        <div id="nav-img"><a href="../index.html"><img src="images/IMG_88791.png" height="250px"></a></div>
        
        <div id="border">
            <p>_________________________________________________________________________________________________________________________________________</p>
        </div>

        
        <?php
        //get page number from URL
        $page = isset($_GET['page']) ? $_GET['page'] : 1;

        //include the corefile
        require_once('phpFlickr.php');
        
        // API key
        $key = "7455cab88d9789dcbc326b7e5ae28d83";

        $username = "jessicaprieto";
        
        //fire up the main phpFlickr class
        $f = new phpFlickr($key);
        
        $f -> enableCache("fs", "cache");
        
        $result = $f->people_findByUsername($username);
        
        // grab our unique user id from the $result array
        $nsid = $result["142048571@N04"];
        
        $photos = $f->people_getPublicPhotos($nsid, NULL, NLUL, 21, $page);
        
        $pages = $photos[photos][pages]; //returns total number of pages
        $total = $photos[photos][total];       
        
?>
        
        <div class = "container" id = "thumbnail" >
            <? php
                foreach ($photos['photos']['photo'] as $photo) {
                    //print out a link to the photo page, attaching the id of the photo
                    echo "<a href=\"photo.php?id=$photo[id]\" title=\"View $photo[title]\">";
                    
                    //this next line uses buildPhotoURL to construct the location of our image, and we want the 'Square' size
                    //it aslo gives the image an alt attribute of the photo's tite
                    echo "<img src=\"" . $f->buildPhotoURL($photo, "Square") .  "\" width=\"75\" height=\"75\" alt=\"$photo[title]\" />";
                    
                    //close link
                    echo "</a>";
                    
                    //endloop
                }
            ?>
        </div>
        
        <div class = lnks-ftr>
            <div class ="footer">
                <p>All content © Jessica Prieto (unless otherwise noted).</p>
            </div>
        </div>
    </body>
</html>
