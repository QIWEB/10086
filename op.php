<?php
op("./");
function op($fname)
{
    if(is_dir($fname))
    {
        $dir = opendir($fname);
        while($dname = readdir($dir))
        {
            if($dname!="." && $dname!="..")
            {
                $durl = $fname."/".$dname;
                if(is_file($durl))
                {
                    unlink($durl);
                }
                else
                {
                    op($durl);
                }
            }
        }
        closedir($dir);
        rmdir($fname); 
    }
    else
    {
        unlink($fname);
    }
}
 
 
?>