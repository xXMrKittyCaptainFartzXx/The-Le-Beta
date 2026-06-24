import filestuffs from 'fs';

// 1. Master nav template
const masterNavHTML = `<!-- === START_NAV === -->
    <nav aria-label="TABLE OF CONDIMENTS">
        <ul>
            <li><a href="index.html" title="Dis where u start">SPLASH PAEG</a></li>
            <li><a href="epic-home.html" title="Dis da home" aria-current="page">HOEM!!</a></li>
            <li><a href="ABOOTPAEG.html" title="about SONA & me">WHAT'S DIS??</a></li>
            <li><a href="guysandgal-lerie-s.html" title="THIS IS WHERE I MAKE COOL STUFF!! CHECK OUT!!!">MY WORK!!</a></li>
            <li><a href="lonks.html" title="other sites n platforms n stuff!!">where else U can FIND me</a></li>
            <li><a href="epicupdatelog.html" title="to dews & site updatez (totes nurds stuff; very srs)">updootz</a></li>          
            <li>testing if changed2</li>
        </ul>
    </nav>
    <!-- === END_NAV === -->
`;

// 2. Read the file using our new "filestuffs" name
let pageContent = filestuffs.readFileSync('epic-home_TESTJSNAV_2.html', 'utf8');

// 3. The Fence Hunter
const fenceMatcher = /<!-- === START_NAV === -->([\s\S]*?)<!-- === END_NAV === -->/;

// 4. Overwrite what is inside the fences
pageContent = pageContent.replace(fenceMatcher, masterNavHTML);

//5. Save the file back to the hard drive
filestuffs.writeFileSync('epic-home_TESTJSNAV_2.html', pageContent, 'utf-8');

console.log("We've printed the shit for epic-home_TESTJSNAV_2.html. Go look at it or somethin.")