let width = 910;
let height = 290;

let data =
    [
        {"cx":165.8003383986615,"cy":211.879583395683,"r":2.4905074378873935,"fill":"rgba(255,255,255,0.9203882979994444)","key":0},
        {"cx":841.5679338475038,"cy":53.48852899783523,"r":2.1318754274476026,"fill":"rgba(255,255,255,0.854120618076255)","key":1},
        {"cx":218.9442890043275,"cy":90.31710442894828,"r":1.023569001713188,"fill":"rgba(255,255,255,0.814314903582509)","key":2},
        {"cx":432.83603102890567,"cy":49.528400261064334,"r":1.0158734239566893,"fill":"rgba(255,255,255,0.7637341665463353)","key":3},
        {"cx":337.9271070385871,"cy":112.84117751429065,"r":2.9223147562818053,"fill":"rgba(255,255,255,0.9615716781263817)","key":4},
        {"cx":417.87129642296486,"cy":223.93726308797605,"r":1.4240818636742671,"fill":"rgba(255,255,255,0.807083929620432)","key":5},
        {"cx":803.954800891498,"cy":248.23102501573112,"r":1.5815801070560749,"fill":"rgba(255,255,255,0.971029282039593)","key":6},
        {"cx":659.6346393544062,"cy":240.63132195219333,"r":1.5390743512258585,"fill":"rgba(255,255,255,0.9252567393572542)","key":7},
        {"cx":424.53041180714365,"cy":225.87791552116462,"r":2.8731033976905502,"fill":"rgba(255,255,255,0.9432578902105953)","key":8},
        {"cx":322.8197105583604,"cy":235.91046963397906,"r":1.2123652435798207,"fill":"rgba(255,255,255,0.9216263132892453)","key":9},
        {"cx":564.6941779151774,"cy":112.27064561487703,"r":2.2084238297670953,"fill":"rgba(255,255,255,0.7617723373600149)","key":10},
        {"cx":418.232234927316,"cy":214.42899456801447,"r":1.0799530009204537,"fill":"rgba(255,255,255,0.9016412253795463)","key":11},
        {"cx":392.121940989475,"cy":239.18742010161603,"r":1.2214031403931078,"fill":"rgba(255,255,255,0.8387867992400515)","key":12},
        {"cx":114.6208416633083,"cy":121.20002754834898,"r":1.4178307550837683,"fill":"rgba(255,255,255,0.9563057890520963)","key":13},
        {"cx":702.8596985834206,"cy":149.300064912146,"r":1.7108047746591784,"fill":"rgba(255,255,255,0.973560249167409)","key":14},
        {"cx":246.89678921263737,"cy":43.14457721399528,"r":2.1376440738282394,"fill":"rgba(255,255,255,0.7544958389659877)","key":15},
        {"cx":409.9839328118096,"cy":203.24926172169145,"r":1.400120290451098,"fill":"rgba(255,255,255,0.8220963127936018)","key":16},
        {"cx":628.242266210558,"cy":265.98614420973007,"r":2.9865794681268683,"fill":"rgba(255,255,255,0.8550541487721885)","key":17},
        {"cx":243.70847930463717,"cy":249.87699288187497,"r":2.963954662679344,"fill":"rgba(255,255,255,0.8195860485647313)","key":18},
        {"cx":589.708798872512,"cy":91.99489372813716,"r":1.4762339167297296,"fill":"rgba(255,255,255,0.9772654648808632)","key":19},
        {"cx":730.8954947971563,"cy":166.83553947903198,"r":1.2360320884484661,"fill":"rgba(255,255,255,0.8066520601823624)","key":20},
        {"cx":778.7052130831496,"cy":105.787141614801,"r":3.0139128882779667,"fill":"rgba(255,255,255,0.9236679418717624)","key":21},
        {"cx":557.7105772511654,"cy":37.888348514641905,"r":2.5988782448931187,"fill":"rgba(255,255,255,0.9083072873945766)","key":22},
        {"cx":112.54943936418371,"cy":274.1996588146492,"r":1.81891797072576,"fill":"rgba(255,255,255,0.8011630352637124)","key":23},
        {"cx":748.6563566927854,"cy":195.35224800843716,"r":3.46183917472103,"fill":"rgba(255,255,255,0.889419938455936)","key":24},
        {"cx":505.4634651407053,"cy":20.6249421691906,"r":2.4757544041274784,"fill":"rgba(255,255,255,0.968299069281546)","key":25},
        {"cx":463.5782922775713,"cy":153.04890436824212,"r":1.6457118030681412,"fill":"rgba(255,255,255,0.8094290190199971)","key":26},
        {"cx":82.5507013640358,"cy":28.6596807609397,"r":2.1152236007803413,"fill":"rgba(255,255,255,0.9259655721553355)","key":27},
        {"cx":300.74078310711906,"cy":99.1057204502795,"r":2.8393435276393917,"fill":"rgba(255,255,255,0.7525075946831903)","key":28},
        {"cx":459.11645851053856,"cy":140.1413285761028,"r":1.2849235807466999,"fill":"rgba(255,255,255,0.9878060696417371)","key":29},
        {"cx":599.6606075249459,"cy":49.969844095372736,"r":3.2108237098351062,"fill":"rgba(255,255,255,0.9690278519769948)","key":30},
        {"cx":906.8978905826843,"cy":118.63736391126325,"r":3.108000310653946,"fill":"rgba(255,255,255,0.9284720131008489)","key":31},
        {"cx":567.31009064034,"cy":224.6085165618868,"r":2.2616243533388953,"fill":"rgba(255,255,255,0.8740668962094916)","key":32},
        {"cx":589.1521354654209,"cy":47.685067173525574,"r":3.4287460696293905,"fill":"rgba(255,255,255,0.7618599481384185)","key":33},
        {"cx":468.3097443447876,"cy":184.2556823990049,"r":2.3655995319846563,"fill":"rgba(255,255,255,0.8243717373090087)","key":34},
        {"cx":211.83673931449587,"cy":159.35704953686343,"r":2.234328688887339,"fill":"rgba(255,255,255,0.8132454366426413)","key":35},
        {"cx":846.7607298950035,"cy":149.99065339277016,"r":2.9927899914147056,"fill":"rgba(255,255,255,0.7849297651518847)","key":36},
        {"cx":176.9191831124954,"cy":45.43483215219322,"r":1.1598566824991758,"fill":"rgba(255,255,255,0.9738501255871621)","key":37},
        {"cx":31.21914156469507,"cy":216.30896823911235,"r":1.077120882060437,"fill":"rgba(255,255,255,0.8733698358409885)","key":38},
        {"cx":315.5052601102572,"cy":59.81439382335806,"r":1.0081257222191384,"fill":"rgba(255,255,255,0.8318087274875245)","key":39},
        {"cx":165.71772001401857,"cy":131.811563026582,"r":2.9595302876853467,"fill":"rgba(255,255,255,0.9811176757674627)","key":40},
        {"cx":646.594132084109,"cy":217.62112109127182,"r":2.041041725672822,"fill":"rgba(255,255,255,0.9597862664033932)","key":41},
        {"cx":92.17218075622485,"cy":150.28215999977255,"r":1.2920626188241748,"fill":"rgba(255,255,255,0.9114427634953908)","key":42},
        {"cx":131.5384417211696,"cy":53.23518913695667,"r":1.6339953193089216,"fill":"rgba(255,255,255,0.9060218916840517)","key":43},
        {"cx":157.78783415608743,"cy":95.42613694686551,"r":1.8431068578833383,"fill":"rgba(255,255,255,0.9433373737366034)","key":44},
        {"cx":215.95324861502678,"cy":9.762633251538375,"r":2.3937123694456623,"fill":"rgba(255,255,255,0.879273118283933)","key":45},
        {"cx":483.28896410759774,"cy":66.77777329284773,"r":3.416703486007526,"fill":"rgba(255,255,255,0.996419734823861)","key":46},
        {"cx":636.4767492962487,"cy":125.48847600868183,"r":1.1119938002987868,"fill":"rgba(255,255,255,0.8692780767348943)","key":47},
        {"cx":865.0070657508269,"cy":122.32627705034871,"r":2.493212881912101,"fill":"rgba(255,255,255,0.8753614856224554)","key":48},
        {"cx":729.713594382327,"cy":250.9272041598924,"r":2.4489941363348047,"fill":"rgba(255,255,255,0.831350896017363)","key":49},
        {"cx":659.1928650002611,"cy":93.64388640695205,"r":2.477987284064926,"fill":"rgba(255,255,255,0.8533367422743485)","key":50},
        {"cx":519.2974222609853,"cy":183.92776466023847,"r":2.2824719242811566,"fill":"rgba(255,255,255,0.9485571655355397)","key":51},
        {"cx":765.3651603958236,"cy":145.91180026935726,"r":2.5070590980305676,"fill":"rgba(255,255,255,0.9665856129761333)","key":52},
        {"cx":247.73085490645497,"cy":144.48556173052532,"r":3.42330543903692,"fill":"rgba(255,255,255,0.8824281695945877)","key":53},
        {"cx":350.0341971641159,"cy":43.11873119824957,"r":1.354021312545758,"fill":"rgba(255,255,255,0.862497045345415)","key":54},
        {"cx":302.1809782944266,"cy":32.99053121232108,"r":2.3851495842483774,"fill":"rgba(255,255,255,0.843036943548196)","key":55},
        {"cx":858.1520636648963,"cy":98.31344157486038,"r":2.4522767697879235,"fill":"rgba(255,255,255,0.7847801117432449)","key":56},
        {"cx":248.05860129390203,"cy":216.78296471039684,"r":2.5704349733045166,"fill":"rgba(255,255,255,0.9374394306340703)","key":57},
        {"cx":599.8986480673689,"cy":166.88873769569037,"r":2.918687519303311,"fill":"rgba(255,255,255,0.9132800682134559)","key":58},
        {"cx":507.36330198683515,"cy":93.57273510481798,"r":3.3443496804721002,"fill":"rgba(255,255,255,0.7842761758482986)","key":59},
        {"cx":792.0200995783221,"cy":155.46523648629187,"r":3.202009774025617,"fill":"rgba(255,255,255,0.9888757638110158)","key":60},
        {"cx":898.058265490328,"cy":266.40552073506984,"r":2.918475574507046,"fill":"rgba(255,255,255,0.812984866877201)","key":61},
        {"cx":753.682543668254,"cy":245.4210926284744,"r":1.7600102689232209,"fill":"rgba(255,255,255,0.9621494788569998)","key":62},
        {"cx":738.964522868986,"cy":130.79495119585434,"r":2.5943113296884786,"fill":"rgba(255,255,255,0.9359001943247269)","key":63},
        {"cx":745.0817958850095,"cy":249.04912739822944,"r":2.4398701781431322,"fill":"rgba(255,255,255,0.8870542277662976)","key":64},
        {"cx":883.0320165516913,"cy":204.9647792814465,"r":2.520042066003138,"fill":"rgba(255,255,255,0.9308336248016239)","key":65},
        {"cx":305.67734510306974,"cy":15.642894590130894,"r":3.4562632001822875,"fill":"rgba(255,255,255,0.9053879507211444)","key":66},
        {"cx":658.9019404784879,"cy":218.99339116561285,"r":2.47924451124183,"fill":"rgba(255,255,255,0.8784967014630607)","key":67},
        {"cx":715.9753816835326,"cy":112.78596784378932,"r":3.403757087785146,"fill":"rgba(255,255,255,0.8384663104529085)","key":68},
        {"cx":235.65340218365097,"cy":174.07729820942976,"r":1.6908191930990293,"fill":"rgba(255,255,255,0.7529872304791874)","key":69},
        {"cx":252.32813190725815,"cy":149.81454899736283,"r":2.9228446518718973,"fill":"rgba(255,255,255,0.9582804911430498)","key":70},
        {"cx":48.81381216612803,"cy":23.919216958692974,"r":3.32747702255363,"fill":"rgba(255,255,255,0.9695079362053802)","key":71},
        {"cx":776.6505393255025,"cy":222.2452769176588,"r":2.6752936538617242,"fill":"rgba(255,255,255,0.787619719068318)","key":72},
        {"cx":722.6007156811684,"cy":220.59105826253978,"r":3.3514261790251596,"fill":"rgba(255,255,255,0.9251969906075248)","key":73},
        {"cx":881.8116096752125,"cy":183.35211777547937,"r":2.7521303651740405,"fill":"rgba(255,255,255,0.9246899971907765)","key":74},
        {"cx":486.48147784014833,"cy":82.76693182343134,"r":1.369418533793266,"fill":"rgba(255,255,255,0.8080110060298217)","key":75},
        {"cx":310.5434516174701,"cy":89.18768679586518,"r":2.100191601261871,"fill":"rgba(255,255,255,0.8741180678112095)","key":76},
        {"cx":187.64260857954196,"cy":289.6916358862971,"r":1.5268511104816804,"fill":"rgba(255,255,255,0.8638484700199291)","key":77},
        {"cx":317.67221733090867,"cy":125.47230805828166,"r":2.5153031603319143,"fill":"rgba(255,255,255,0.7975967758835552)","key":78},
        {"cx":578.1627797289143,"cy":128.1518793769811,"r":3.2981006371812263,"fill":"rgba(255,255,255,0.8706742821232157)","key":79},
        {"cx":549.1381792360928,"cy":246.35218037372312,"r":2.9769083094818884,"fill":"rgba(255,255,255,0.8997515900974238)","key":80},
        {"cx":37.66322890622322,"cy":155.10583940321544,"r":2.1600136676901713,"fill":"rgba(255,255,255,0.9726358377261766)","key":81},
        {"cx":428.9098646592279,"cy":34.80281758525982,"r":2.3619398772190916,"fill":"rgba(255,255,255,0.8824528779453864)","key":82},
        {"cx":826.5050093573801,"cy":29.942673496756118,"r":1.7413660617576545,"fill":"rgba(255,255,255,0.9546664818307568)","key":83},
        {"cx":702.3111208318112,"cy":89.01720958640436,"r":1.0754670910003359,"fill":"rgba(255,255,255,0.8366091275227949)","key":84},
        {"cx":835.6569317824147,"cy":196.79120403078582,"r":1.2026257873578619,"fill":"rgba(255,255,255,0.9699057147188667)","key":85},
        {"cx":374.9380714581052,"cy":276.2194914710683,"r":3.318259317369753,"fill":"rgba(255,255,255,0.9924010009031409)","key":86},
        {"cx":104.8664418823526,"cy":39.97112332091202,"r":2.9048299644588655,"fill":"rgba(255,255,255,0.7763592534001305)","key":87},
        {"cx":347.4041485309273,"cy":158.44313044354348,"r":1.411482978586436,"fill":"rgba(255,255,255,0.9461924856370154)","key":88},
        {"cx":451.9157533536162,"cy":231.75568155236996,"r":1.6441396337360845,"fill":"rgba(255,255,255,0.8814343824987677)","key":89},
        {"cx":390.65079362208076,"cy":199.8383952702461,"r":2.3206885070086196,"fill":"rgba(255,255,255,0.839964164901987)","key":90},
        {"cx":894.616991872953,"cy":101.34523552944776,"r":1.1911907628483496,"fill":"rgba(255,255,255,0.9797273778989912)","key":91},
        {"cx":676.2803286304911,"cy":93.30687325521558,"r":2.317899660510326,"fill":"rgba(255,255,255,0.8623575487492647)","key":92},
        {"cx":95.8976751916509,"cy":286.2187435793705,"r":2.8693713404359418,"fill":"rgba(255,255,255,0.9597954625654441)","key":93},
        {"cx":21.10837472519541,"cy":216.23487169498546,"r":1.2717622030812794,"fill":"rgba(255,255,255,0.8400371962176638)","key":94},
        {"cx":236.98794280078977,"cy":30.73185585725241,"r":1.9477094462323021,"fill":"rgba(255,255,255,0.9435752239287964)","key":95},
        {"cx":40.77987043868083,"cy":195.30350425308933,"r":2.060163616642398,"fill":"rgba(255,255,255,0.9286370706482668)","key":96},
        {"cx":589.7280375983008,"cy":218.92516739538763,"r":1.6797019029492462,"fill":"rgba(255,255,255,0.9274174031002489)","key":97},
        {"cx":755.3326138753289,"cy":28.73181640930321,"r":3.1900466470661026,"fill":"rgba(255,255,255,0.9161605051733173)","key":98},
        {"cx":739.3326423457456,"cy":111.42494554386323,"r":3.3835123751796363,"fill":"rgba(255,255,255,0.8191349186535082)","key":99},
        {"cx":180.84840232533247,"cy":68.42942041900423,"r":1.4850820369558528,"fill":"rgba(255,255,255,0.8427582783231296)","key":100},
        {"cx":238.41915372450666,"cy":48.33585973585292,"r":1.0631700114079081,"fill":"rgba(255,255,255,0.922917204157695)","key":101},
        {"cx":322.12318650097035,"cy":62.24010762118044,"r":1.175771260553574,"fill":"rgba(255,255,255,0.8705176219797237)","key":102},
        {"cx":751.7970891398817,"cy":80.49499359236022,"r":2.414538622150494,"fill":"rgba(255,255,255,0.9917158228987977)","key":103},
        {"cx":64.88787151402096,"cy":6.763688568465451,"r":3.1756499443111825,"fill":"rgba(255,255,255,0.8758434168419801)","key":104},
        {"cx":140.08492168100244,"cy":104.48891159086445,"r":1.8867165884621442,"fill":"rgba(255,255,255,0.8816126442199124)","key":105},
        {"cx":280.00539842731627,"cy":117.2784871758904,"r":1.54854126790628,"fill":"rgba(255,255,255,0.8200305434034463)","key":106},
        {"cx":438.59509390557906,"cy":205.21730529776627,"r":3.2692180065521894,"fill":"rgba(255,255,255,0.9838611396259931)","key":107},
        {"cx":512.2680082340969,"cy":172.72780533138018,"r":1.2297941016913567,"fill":"rgba(255,255,255,0.8042257640811243)","key":108},
        {"cx":269.43217069753416,"cy":121.0101060783046,"r":2.2840886804307923,"fill":"rgba(255,255,255,0.757693407668539)","key":109},
        {"cx":455,"cy":145,"r":3.3,"fill":"rgba(255,255,255,1.0)","key":110, "center": true}
    ];

let alpha = 5;
for (let i = 0; i < data.length; i++) {
    let x = data[i].cx;
    let y = data[i].cy;

        let theta = Math.atan2(y - (height / 2), x - (width / 2));
        let deltaX = (alpha * Math.cos(theta));
        let deltaY = (alpha * Math.sin(theta));

        if (data[i].key === 110) {
               deltaX = 0;
               deltaY = 0;
        }

        data[i].deltaX = deltaX;
        data[i].deltaY = deltaY;
}

export { data };
