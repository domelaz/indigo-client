﻿angular.module('indigo').constant('sample_status',
            [
                 {
                    name: 'new',
                    label: 'новые',
                    color: 'FFFAC2',
                 },
                 {
                    name: 'job',
                    label: 'в работе',
                    color: '#CCE8FF',
                 },
                 {
                    name: 'agreement',
                    label: 'на утверждении',
                    color: '#87B7E1',
                 },
                 {
                    name: 'agreed',
                    label: 'утвержденные',
                    color: '#C7E4BA',
                 },
                 {
                    name: 'closed',
                    label: 'завершенные',
                    color: '#F8BBC7',
                 },
                 {
                    name: 'deleted',
                    label: 'аннулированные',
                    color: '#767676',
                 },
             ]
);
angular.module('indigo').constant('sample_ink',
            [
				{ name: 'Opaque',
                     color: '#FFFFFF',
                  },
				{ name: 'Cyan',
                     color: '#00AEEF',
                  },
				{ name: 'Magenta',
                     color: '#EC008C',
                  },
				{ name: 'Yellow',
                     color: '#FFFF00',
                  },
				{ name: 'Black',
                     color: '#000000',
                  },
				{ name: 'Orange',
                     color: '#FF5000',
                  },
                  { name: 'Violet',
                     color: '#430098',
                  },
            ]
);
angular.module('indigo').constant('sample_pms',
            {
                  '':         '#EEE',
                  '100':    '#F4ED7C',
                  '101':    '#F4ED47',
                  '102':    '#F9E814',
                  '103':    '#C6AD0F',
                  '104':    '#AD9B0C',
                  '105':    '#82750F',
                  '106':    '#F7E859',
                  '107':    '#F9E526',
                  '108':    '#F9DD16',
                  '109':    '#F9D616',
                  '110':    '#D8B511',
                  '111':    '#AA930A',
                  '112':    '#99840A',
                  '113':    '#F9E55B',
                  '114':    '#F9E24C',
                  '115':    '#F9E04C',
                  '116':    '#FCD116',
                  '117':    '#C6A00C',
                  '118':    '#AA8E0A',
                  '119':    '#897719',
                  '120':    '#F9E27F',
                  '1205':  '#F7E8AA',
                  '121':    '#F9E070',
                  '1215':  '#F9E08C',
                  '122':    '#FCD856',
                  '1225':  '#FFCC49',
                  '123':    '#FFC61E',
                  '1235':   '#FCB514',
                  '124':    '#E0AA0F',
                  '1245':    '#BF910C',
                  '125':    '#B58C0A',
                  '1255':   '#A37F14',
                  '126':    '#A38205',
                  '1265':    '#7C6316',
                  '127':    '#F4E287',
                  '128':    '#F4DB60',
                  '129':    '#F2D13D',
                  '130':    '#EAAF0F',
                  '131':    '#C6930A',
                  '132':    '#9E7C0A',
                  '133':    '#705B0A',
                  '134':    '#FFD87F',
                  '1345':   '#FFD691',
                  '135':    '#FCC963',
                  '1355':   '#FCCE87',
                  '136':    '#FCBF49',
                  '1365':   '#FCBA5E',
                  '137':    '#FCA311',
                  '1375':   '#F99B0C',
                  '138':    '#D88C02',
                  '1385':   '#CC7A02',
                  '139':    '#AF7505',
                  '1395':   '#996007',
                  '140':    '#7A5B11',
                  '1405':   '#6B4714',
                  '141':    '#F2CE68',
                  '142':    '#F2BF49',
                  '143':    '#EFB22D',
                  '144':    '#E28C05',
                  '145':    '#C67F07',
                  '146':    '#9E6B05',
                  '147':    '#725E26',
                  '148':    '#FFD69B',
                  '1485':    '#FFB777',
                  '149':    '#FCCC93',
                  '1495':    '#FF993F',
                  '150':    '#FCAD56',
                  '1505':   '#F47C00',
                  '151':    '#F77F00',
                  '152':    '#DD7500',
                  '1525':   '#B55400',
                  '153':    '#BC6D0A',
                  '1535':   '#8C4400',
                  '154':    '#995905',
                  '1545':   '#4C280F',
                  '155':    '#F4DBAA',
                  '1555':   '#F9BF9E',
                  '156':    '#F2C68C',
                  '1565':   '#FCA577',
                  '157':    '#EDA04F',
                  '1575':   '#FC8744',
                  '158':    '#E87511',
                  '1585':   '#F96B07',
                  '159':    '#C66005',
                  '1595':   '#D15B05',
                  '160':     '#9E540A',
                  '1605':   '#A04F11',
                  '161':    '#633A11',
                  '1615':    '#843F0F',
                  '162':    '#F9C6AA',
                  '1625':    '#F9A58C',
                  '163':    '#FC9E70',
                  '1635':    '#F98E6D',
                  '164':    '#FC7F3F',
                  '1645':   '#F97242',
                  '165':    '#F96302',
                  '1655':    '#F95602',
                  '166':    '#DD5900',
                  '1665':   '#DD4F05',
                  '167':    '#BC4F07',
                  '1675':   '#A53F0F',
                  '168':    '#6D3011',
                  '1685':   '#843511',
                  '169':    '#F9BAAA',
                  '170':    '#F98972',
                  '171':    '#F9603A',
                  '172':    '#F74902',
                  '173':    '#D14414',
                  '174':    '#933311',
                  '175':    '#6D3321',
                  '176':    '#F9AFAD',
                  '1765':    '#F99EA3',
                  '1767':   '#F9B2B7',
                  '177':    '#F9827F',
                  '1775':    '#F9848E',
                  '1777':   '#FC6675',
                  '178':    '#F95E59',
                  '1785':   '#FC4F59',
                  '1787':   '#F43F4F',
                  '1788':   '#EF2B2D',
                  '179':    '#E23D28',
                  '1795':    '#D62828',
                  '1797':   '#CC2D30',
                  '180':    '#C13828',
                  '1805':   '#AF2626',
                  '1807':   '#A03033',
                  '181':    '#7C2D23',
                  '1810':    '#7C211E',
                  '1817':   '#5B2D28',
                  '182':    '#F9BFC1',
                  '183':    '#FC8C99',
                  '184':    '#FC5E72',
                  '185':    '#E8112D',
                  '186':    '#CE1126',
                  '187':    '#AF1E2D',
                  '188':    '#7C2128',
                  '189':    '#FFA3B2',
                  '1895':   '#FCBFC9',
                  '190':    '#FC758E',
                  '1905':    '#FC9BB2',
                  '191':    '#F4476B',
                  '1915':   '#F4547C',
                  '192':    '#E5053A',
                  '1925':   '#E00747',
                  '193':    '#DB828C',
                  '1935':    '#C10538',
                  '194':    '#992135',
                  '1945':   '#A80C35',
                  '1955':   '#931638',
                  '196':    '#F4C9C9',
                  '197':    '#EF99A3',
                  '198':    '#772D35',
                  '199':    '#D81C3F',
                  '200':    '#C41E3A',
                  '201':    '#A32638',
                  '202':    '#8C2633',
                  '203':    '#F2AFC1',
                  '204':    '#ED7A9E',
                  '205':    '#E54C7C',
                  '206':    '#D30547',
                  '207':    '#BAAA9E',
                  '208':    '#8E2344',
                  '209':    '#75263D',
                  '210':    '#FFA0BF',
                  '211':    '#FF77A8',
                  '212':    '#F94F8E',
                  '213':    '#EA0F6B',
                  '214':    '#CC0256',
                  '215':    '#A50544',
                  '216':    '#7C1E3F',
                  '217':    '#F4BFD1',
                  '218':    '#ED72AA',
                  '219':    '#E22882',
                  '220':    '#AA004F',
                  '221':    '#930042',
                  '222':    '#70193D',
                  '223':    '#F993C4',
                  '224':    '#F46BAF',
                  '225':    '#ED2893',
                  '226':     '#D60270',
                  '227':    '#AD005B',
                  '228':    '#8C004C',
                  '229':    '#6D213F',
                  '230':    '#FFA0CC',
                  '231':    '#FC70BA',
                  '232':    '#F43FA5',
                  '233':    '#CE007C',
                  '234':    '#AA0066',
                  '235':    '#8E0554',
                  '236':    '#F9AFD3',
                  '2365':   '#F7C4D8',
                  '237':    '#F484C4',
                  '2375':    '#EA6BBF',
                  '238':    '#ED4FAF',
                  '2385':    '#DB28A5',
                  '239':    '#E0219E',
                  '2395':    '#C4008C',
                  '240':    '#C40F89',
                  '2405':    '#A8007A',
                  '241':    '#AD0075',
                  '2415':    '#9B0070',
                  '242':    '#7C1C51',
                  '2425':   '#87005B',
                  '243':    '#F2BAD8',
                  '244':    '#EDA0D3',
                  '245':    '#E87FC9',
                  '246':    '#CC00A0',
                  '247':     '#B7008E',
                  '248':    '#A3057F',
                  '249':    '#7F2860',
                  '250':    '#EDC4DD',
                  '251':    '#E29ED6',
                  '252':    '#D36BC6',
                  '253':    '#AF23A5',
                  '254':     '#A02D96',
                  '255':    '#772D6B',
                  '256':    '#E5C4D6',
                  '2562':    '#D8A8D8',
                  '2563':   '#D1A0CC',
                  '2567':   '#BF93CC',
                  '257':    '#D3A5C9',
                  '2572':   '#C687D1',
                  '2573':   '#BA7CBC',
                  '2577':   '#AA72BF',
                  '258':    '#9B4F96',
                  '2582':   '#AA47BA',
                  '2583':   '#9E4FA5',
                  '2587':   '#8E47AD',
                  '259':    '#72166B',
                  '2592':    '#930FA5',
                  '2593':   '#872B93',
                  '2597':    '#66008C',
                  '260':    '#681E5B',
                  '2602':    '#820C8E',
                  '2603':   '#70147A',
                  '2607':   '#5B027A',
                  '261':    '#5E2154',
                  '2612':   '#701E72',
                  '2613':   '#66116D',
                  '2617':   '#560C70',
                  '262':    '#542344',
                  '2622':    '#602D59',
                  '2623':   '#5B195E',
                  '2627':   '#4C145E',
                  '263':    '#E0CEE0',
                  '2635':   '#C9ADD8',
                  '264':    '#C6AADB',
                  '2645':    '#B591D1',
                  '265':     '#9663C4',
                  '2655':    '#9B6DC6',
                  '266':    '#6D28AA',
                  '2665':    '#894FBF',
                  '267':    '#59118E',
                  '268':    '#4F2170',
                  '2685':    '#56008C',
                  '269':    '#442359',
                  '2695':   '#44235E',
                  '270':    '#BAAFD3',
                  '2705':   '#AD9ED3',
                  '2706':   '#D1CEDD',
                  '2707':   '#BFD1E5',
                  '2708':   '#AFBCDB',
                  '271':    '#9E91C6',
                  '2715':    '#937ACC',
                  '2716':   '#A5A0D6',
                  '2717':   '#A5BAE0',
                  '2718':   '#5B77CC',
                  '272':    '#8977BA',
                  '2725':    '#7251BC',
                  '2726':   '#6656BC',
                  '2727':   '#5E68C4',
                  '2728':   '#3044B5',
                  '273':    '#38197A',
                  '2735':   '#4F0093',
                  '2736':   '#4930AD',
                  '2738':   '#2D008E',
                  '274':    '#2B1166',
                  '2745':    '#3F0077',
                  '2746':   '#3F2893',
                  '2747':   '#1C146B',
                  '2748':   '#1E1C77',
                  '275':    '#260F54',
                  '2755':    '#35006D',
                  '2756':   '#332875',
                  '2757':   '#141654',
                  '2758':   '#192168',
                  '276':    '#2B2147',
                  '2765':    '#2B0C56',
                  '2766':   '#2B265B',
                  '2767':   '#14213D',
                  '2768':    '#112151',
                  '277':    '#B5D1E8',
                  '278':    '#99BADD',
                  '279':    '#6689CC',
                  '280':    '#002B7F',
                  '281':    '#002868',
                  '282':    '#002654',
                  '283':    '#9BC4E2',
                  '284':    '#75AADB',
                  '285':    '#3A75C4',
                  '286':    '#0038A8',
                  '287':    '#003893',
                  '288':    '#00337F',
                  '289':    '#002649',
                  '290':    '#C4D8E2',
                  '2905':   '#93C6E0',
                  '291':    '#A8CEE2',
                  '2915':   '#60AFDD',
                  '292':    '#75B2DD',
                  '2925':    '#008ED6',
                  '293':    '#0051BA',
                  '2935':    '#005BBF',
                  '294':    '#003F87',
                  '2945':   '#0054A0',
                  '295':    '#00386B',
                  '2955':   '#003D6B',
                  '296':    '#002D47',
                  '2965':   '#00334C',
                  '297':    '#82C6E2',
                  '2975':   '#BAE0E2',
                  '298':    '#51B5E0',
                  '2985':   '#51BFE2',
                  '299':    '#00A3DD',
                  '2995':   '#00A5DB',
                  '300':    '#0072C6',
                  '3005':   '#0084C9',
                  '301':    '#005B99',
                  '3015':    '#00709E',
                  '302':    '#004F6D',
                  '3025':    '#00546B',
                  '303':    '#003F54',
                  '3035':   '#004454',
                  '304':    '#A5DDE2',
                  '305':    '#70CEE2',
                  '306':    '#00BCE2',
                  '307':    '#007AA5',
                  '308':    '#00607C',
                  '309':    '#003F49',
                  '310':    '#72D1DD',
                  '3105':    '#7FD6DB',
                  '311':    '#28C4D8',
                  '3115':    '#2DC6D6',
                  '312':    '#00ADC6',
                  '3125':    '#00B7C6',
                  '313':     '#0099B5',
                  '3135':    '#009BAA',
                  '314':    '#00829B',
                  '3145':    '#00848E',
                  '315':    '#006B77',
                  '3155':    '#006D75',
                  '316':    '#00494F',
                  '3165':    '#00565B',
                  '317':    '#C9E8DD',
                  '318':    '#93DDDB',
                  '319':    '#4CCED1',
                  '320':    '#009EA0',
                  '321':    '#008789',
                  '322':    '#007272',
                  '323':    '#006663',
                  '324':    '#AADDD6',
                  '3242':    '#87DDD1',
                  '3245':   '#8CE0D1',
                  '3248':   '#7AD3C1',
                  '325':    '#56C9C1',
                  '3252':    '#56D6C9',
                  '3255':   '#47D6C1',
                  '3258':   '#35C4AF',
                  '326':    '#00B2AA',
                  '3262':    '#00C1B5',
                  '3265':   '#00C6B2',
                  '3268':   '#00AF99',
                  '327':    '#008C82',
                  '3272':    '#00AA9E',
                  '3275':   '#00B2A0',
                  '3278':   '#009B84',
                  '328':    '#007770',
                  '3282':   '#008C82',
                  '3285':   '#009987',
                  '3288':   '#008270',
                  '329':    '#006D66',
                  '3292':    '#006056',
                  '3295':   '#008272',
                  '3298':   '#006B5B',
                  '330':    '#005951',
                  '3302':    '#00493F',
                  '3305':   '#004F42',
                  '3308':   '#004438',
                  '331':    '#BAEAD6',
                  '332':    '#A0E5CE',
                  '333':    '#5EDDC1',
                  '334':    '#00997C',
                  '335':    '#007C66',
                  '336':    '#006854',
                  '337':    '#9BDBC1',
                  '3375':    '#8EE2BC',
                  '338':    '#7AD1B5',
                  '3385':   '#54D8A8',
                  '339':    '#00B28C',
                  '3395':    '#00C993',
                  '340':    '#009977',
                  '3405':    '#00B27A',
                  '341':    '#007A5E',
                  '3415':    '#007C59',
                  '342':    '#006B54',
                  '3425':   '#006847',
                  '343':    '#00563F',
                  '3435':    '#024930',
                  '344':    '#B5E2BF',
                  '345':    '#96D8AF',
                  '346':    '#70CE9B',
                  '347':    '#009E60',
                  '348':    '#008751',
                  '349':    '#006B3F',
                  '350':    '#234F33',
                  '351':    '#B5E8BF',
                  '352':    '#99E5B2',
                  '353':    '#84E2A8',
                  '354':    '#00B760',
                  '355':    '#009E49',
                  '356':    '#007A3D',
                  '357':    '#215B33',
                  '358':    '#AADD96',
                  '359':    '#A0DB8E',
                  '360':    '#60C659',
                  '361':    '#1EB53A',
                  '362':    '#339E35',
                  '363':    '#3D8E33',
                  '364':    '#3A7728',
                  '365':    '#D3E8A3',
                  '366':    '#C4E58E',
                  '367':    '#AADD6D',
                  '368':    '#5BBF21',
                  '369':    '#56AA1C',
                  '370':    '#568E14',
                  '371':    '#566B21',
                  '372':    '#D8ED96',
                  '373':    '#CEEA82',
                  '374':    '#BAE860',
                  '375':    '#8CD600',
                  '376':    '#7FBA00',
                  '377':    '#709302',
                  '378':    '#566314',
                  '379':    '#E0EA68',
                  '380':    '#D6E542',
                  '381':    '#CCE226',
                  '382':    '#BAD80A',
                  '383':    '#A3AF07',
                  '384':    '#939905',
                  '385':    '#707014',
                  '386':    '#E8ED60',
                  '387':    '#E0ED44',
                  '388':    '#D6E80F',
                  '389':    '#CEE007',
                  '390':    '#BAC405',
                  '391':    '#9E9E07',
                  '392':    '#848205',
                  '393':    '#F2EF87',
                  '3935':   '#F2ED6D',
                  '394':    '#EAED35',
                  '3945':    '#EFEA07',
                  '395':    '#E5E811',
                  '3955':    '#EDE211',
                  '396':    '#E0E20C',
                  '3965':   '#E8DD11',
                  '397':    '#C1BF0A',
                  '3975':    '#B5A80C',
                  '398':    '#AFA80A',
                  '3985':   '#998C0A',
                  '399':    '#998E07',
                  '3995':    '#6D6002',
                  '400':     '#D1C6B5',
                  '401':    '#C1B5A5',
                  '402':    '#AFA593',
                  '403':    '#998C7C',
                  '404':    '#827566',
                  '405':    '#6B5E4F',
                  '406':    '#CEC1B5',
                  '408':    '#A8998C',
                  '409':    '#99897C',
                  '410':    '#7C6D63',
                  '411':    '#66594C',
                  '412':    '#3D3028',
                  '413':    '#C6C1B2',
                  '414':    '#B5AFA0',
                  '415':    '#A39E8C',
                  '416':    '#8E8C7A',
                  '417':    '#777263',
                  '418':    '#605E4F',
                  '419':    '#282821',
                  '420':    '#D1CCBF',
                  '421':    '#BFBAAF',
                  '422':    '#AFAAA3',
                  '423':    '#96938E',
                  '424':    '#827F77',
                  '425':    '#60605B',
                  '426':    '#2B2B28',
                  '427':    '#DDDBD1',
                  '428':    '#D1CEC6',
                  '429':    '#ADAFAA',
                  '430':    '#919693',
                  '431':    '#666D70',
                  '432':    '#444F51',
                  '433':    '#30383A',
                  '434':    '#E0D1C6',
                  '435':    '#D3BFB7',
                  '436':    '#BCA59E',
                  '437':    '#8C706B',
                  '438':    '#593F3D',
                  '439':    '#493533',
                  '440':    '#3F302B',
                  '441':    '#D1D1C6',
                  '442':    '#BABFB7',
                  '443':    '#A3A8A3',
                  '444':    '#898E8C',
                  '445':    '#565959',
                  '446':    '#494C49',
                  '447':    '#3F3F38',
                  '448':    '#54472D',
                  '4485':   '#604C11',
                  '449':    '#544726',
                  '4495':   '#877530',
                  '450':    '#60542B',
                  '4505':   '#A09151',
                  '451':    '#ADA07A',
                  '4515':   '#BCAD75',
                  '452':    '#C4B796',
                  '4525':    '#CCBF8E',
                  '453':    '#D6CCAF',
                  '4535':   '#DBCEA5',
                  '454':    '#E2D8BF',
                  '4545':   '#E5DBBA',
                  '455':    '#665614',
                  '456':    '#998714',
                  '457':    '#B59B0C',
                  '458':    '#DDCC6B',
                  '459':    '#E2D67C',
                  '460':    '#EADD96',
                  '461':    '#EDE5AD',
                  '462':    '#5B4723',
                  '4625':    '#472311',
                  '463':    '#755426',
                  '4635':   '#8C5933',
                  '464':    '#876028',
                  '4645':    '#B28260',
                  '465':    '#C1A875',
                  '4655':    '#C49977',
                  '466':    '#D1BF91',
                  '4665':   '#D8B596',
                  '467':    '#DDCCA5',
                  '4675':   '#E5C6AA',
                  '468':    '#E2D6B5',
                  '4685':    '#EDD3BC',
                  '469':    '#603311',
                  '4695':    '#51261C',
                  '470':    '#9B4F19',
                  '4705':    '#7C513D',
                  '471':    '#BC5E1E',
                  '4715':    '#99705B',
                  '472':    '#EAAA7A',
                  '4725':    '#B5917C',
                  '473':    '#F4C4A0',
                  '4735':    '#CCAF9B',
                  '474':    '#F4CCAA',
                  '4745':    '#D8BFAA',
                  '475':    '#F7D3B5',
                  '4755':   '#E2CCBA',
                  '476':    '#593D2B',
                  '477':    '#633826',
                  '478':    '#7A3F28',
                  '479':    '#AF8970',
                  '480':    '#D3B7A3',
                  '481':    '#E0CCBA',
                  '482':    '#E5D3C1',
                  '483':    '#6B3021',
                  '484':    '#9B301C',
                  '485':    '#D81E05',
                  '486':    '#ED9E84',
                  '487':    '#EFB5A0',
                  '488':    '#F2C4AF',
                  '489':    '#F2D1BF',
                  '490':    '#5B2626',
                  '491':    '#752828',
                  '492':    '#913338',
                  '494':    '#F2ADB2',
                  '495':    '#F4BCBF',
                  '496':    '#F7C9C6',
                  '497':    '#512826',
                  '4975':    '#441E1C',
                  '498':    '#6D332B',
                  '4985':   '#844949',
                  '499':    '#7A382D',
                  '4995':   '#A56B6D',
                  '500':    '#CE898C',
                  '5005': '#BC8787',
                  '501': '#EAB2B2',
                  '5015': '#D8ADA8',
                  '502': '#F2C6C4',
                  '5025': '#E2BCB7',
                  '503': '#F4D1CC',
                  '5035': '#EDCEC6',
                  '504': '#511E26',
                  '505': '#661E2B',
                  '506': '#7A2638',
                  '507': '#D8899B',
                  '508': '#E8A5AF',
                  '509': '#F2BABF',
                  '510': '#F4C6C9',
                  '511': '#602144',
                  '5115': '#4F213A',
                  '512': '#84216B',
                  '5125': '#754760',
                  '513': '#9E2387',
                  '5135': '#936B7F',
                  '514': '#D884BC',
                  '5145': '#AD8799',
                  '515': '#E8A3C9',
                  '5155': '#CCAFB7',
                  '516': '#F2BAD3',
                  '5165': '#E0C9CC',
                  '517': '#F4CCD8',
                  '5175': '#E8D6D1',
                  '518': '#512D44',
                  '5185': '#472835',
                  '519': '#63305E',
                  '5195': '#593344',
                  '520': '#703572',
                  '5205': '#8E6877',
                  '521': '#B58CB2',
                  '5215': '#B5939B',
                  '522': '#C6A3C1',
                  '5225': '#CCADAF',
                  '523': '#D3B7CC',
                  '5235': '#DDC6C4',
                  '524': '#E2CCD3',
                  '5245': '#E5D3CC',
                  '525': '#512654',
                  '5255': '#35264F',
                  '526': '#68217A',
                  '5265': '#493D63',
                  '527': '#7A1E99',
                  '5275': '#605677',
                  '528': '#AF72C1',
                  '5285': '#8C8299',
                  '529': '#CEA3D3',
                  '5295': '#B2A8B5',
                  '530': '#D6AFD6',
                  '5305': '#CCC1C6',
                  '531': '#E5C6DB',
                  '5315': '#DBD3D3',
                  '532': '#353842',
                  '533': '#353F5B',
                  '534': '#3A4972',
                  '535': '#9BA3B7',
                  '536': '#ADB2C1',
                  '537': '#C4C6CE',
                  '538': '#D6D3D6',
                  '539': '#003049',
                  '5395': '#02283A',
                  '540': '#00335B',
                  '5405': '#3F6075',
                  '541': '#003F77',
                  '5415': '#607C8C',
                  '542': '#6693BC',
                  '5425': '#8499A5',
                  '543': '#93B7D1',
                  '5435': '#AFBCBF',
                  '544': '#B7CCDB',
                  '5445': '#C4CCCC',
                  '545': '#C4D3DD',
                  '5455': '#D6D8D3',
                  '546': '#0C3844',
                  '5463': '#00353A',
                  '5467': '#193833',
                  '547': '#003F54',
                  '5473': '#26686D',
                  '5477': '#3A564F',
                  '548': '#004459',
                  '5483': '#609191',
                  '5487': '#667C72',
                  '549': '#5E99AA',
                  '5493': '#8CAFAD',
                  '5497': '#91A399',
                  '550': '#87AFBF',
                  '5503': '#AAC4BF',
                  '5507': '#AFBAB2',
                  '551': '#A3C1C9',
                  '5513': '#CED8D1',
                  '5517': '#C9CEC4',
                  '552': '#C4D6D6',
                  '5523': '#D6DDD6',
                  '5527': '#CED1C6',
                  '553': '#234435',
                  '5535': '#213D30',
                  '554': '#195E47',
                  '5545': '#4F6D5E',
                  '555': '#076D54',
                  '5555': '#779182',
                  '556': '#7AA891',
                  '5565': '#96AA99',
                  '557': '#A3C1AD',
                  '5575': '#AFBFAD',
                  '558': '#B7CEBC',
                  '5585': '#C4CEBF',
                  '559': '#C6D6C4',
                  '5595': '#D8DBCC',
                  '560': '#2B4C3F',
                  '5605': '#233A2D',
                  '561': '#266659',
                  '5615': '#546856',
                  '562': '#1E7A6D',
                  '5625': '#728470',
                  '563': '#7FBCAA',
                  '5635': '#9EAA99',
                  '564': '#05705E',
                  '5645': '#BCC1B2',
                  '565': '#BCDBCC',
                  '5655': '#C6CCBA',
                  '566': '#D1E2D3',
                  '5665': '#D6D6C6',
                  '567': '#265142',
                  '569': '#008772',
                  '570': '#7FC6B2',
                  '571': '#AADBC6',
                  '572': '#BCE2CE',
                  '573': '#CCE5D6',
                  '574': '#495928',
                  '5743': '#3F4926',
                  '5747': '#424716',
                  '575': '#547730',
                  '5753': '#5E663A',
                  '5757': '#6B702B',
                  '576': '#608E3A',
                  '5763': '#777C4F',
                  '5767': '#8C914F',
                  '577': '#B5CC8E',
                  '5773': '#9B9E72',
                  '5777': '#AAAD75',
                  '578': '#C6D6A0',
                  '5783': '#B5B58E',
                  '5787': '#C6C699',
                  '579': '#C9D6A3',
                  '5793': '#C6C6A5',
                  '5797': '#D3D1AA',
                  '580': '#D8DDB5',
                  '5803': '#D8D6B7',
                  '5807': '#E0DDBC',
                  '581': '#605E11',
                  '5815': '#494411',
                  '582': '#878905',
                  '5825': '#75702B',
                  '583': '#AABA0A',
                  '5835': '#9E9959',
                  '584': '#CED649',
                  '5845': '#B2AA70',
                  '585': '#DBE06B',
                  '5855': '#CCC693',
                  '586': '#E2E584',
                  '5865': '#D6CEA3',
                  '587': '#E8E89B',
                  '5875': '#E0DBB5',
                  '600': '#F4EDAF',
                  '601': '#F2ED9E',
                  '602': '#F2EA87',
                  '603': '#EDE85B',
                  '604': '#E8DD21',
                  '605': '#DDCE11',
                  '606': '#D3BF11',
                  '607': '#F2EABC',
                  '608': '#EFE8AD',
                  '609': '#EAE596',
                  '610': '#E2DB72',
                  '611': '#D6CE49',
                  '612': '#C4BA00',
                  '613': '#AFA00C',
                  '614': '#EAE2B7',
                  '615': '#E2DBAA',
                  '616': '#DDD69B',
                  '617': '#CCC47C',
                  '618': '#B5AA59',
                  '619': '#968C28',
                  '620': '#847711',
                  '621': '#D8DDCE',
                  '622': '#C1D1BF',
                  '623': '#A5BFAA',
                  '624': '#7FA08C',
                  '625': '#5B8772',
                  '626': '#21543F',
                  '627': '#0C3026',
                  '628': '#CCE2DD',
                  '629': '#B2D8D8',
                  '630': '#8CCCD3',
                  '631': '#54B7C6',
                  '632': '#00A0BA',
                  '633': '#007F99',
                  '634': '#00667F',
                  '635': '#BAE0E0',
                  '636': '#99D6DD',
                  '637': '#6BC9DB',
                  '638': '#00B5D6',
                  '639': '#00A0C4',
                  '640': '#008CB2',
                  '641': '#007AA5',
                  '642': '#D1D8D8',
                  '643': '#C6D1D6',
                  '644': '#9BAFC4',
                  '645': '#7796B2',
                  '646': '#5E82A3',
                  '647': '#26547C',
                  '648': '#00305E',
                  '649': '#D6D6D8',
                  '650': '#BFC6D1',
                  '651': '#9BAABF',
                  '652': '#6D87A8',
                  '653': '#335687',
                  '654': '#0F2B5B',
                  '655': '#0C1C47',
                  '656': '#D6DBE0',
                  '657': '#C1C9DD',
                  '658': '#A5AFD6',
                  '659': '#7F8CBF',
                  '660': '#5960A8',
                  '661': '#2D338E',
                  '662': '#0C1975',
                  '663': '#E2D3D6',
                  '664': '#D8CCD1',
                  '665': '#C6B5C4',
                  '666': '#A893AD',
                  '667': '#7F6689',
                  '668': '#664975',
                  '669': '#472B59',
                  '670': '#F2D6D8',
                  '671': '#EFC6D3',
                  '672': '#EAAAC4',
                  '673': '#E08CB2',
                  '674': '#D36B9E',
                  '675': '#BC3877',
                  '676': '#A00054',
                  '677': '#EDD6D6',
                  '678': '#EACCCE',
                  '679': '#E5BFC6',
                  '680': '#D39EAF',
                  '681': '#B7728E',
                  '682': '#A05175',
                  '683': '#7F284F',
                  '684': '#EFCCCE',
                  '685': '#EABFC4',
                  '686': '#E0AABA',
                  '687': '#C9899E',
                  '688': '#B26684',
                  '689': '#934266',
                  '690': '#702342',
                  '691': '#EFD1C9',
                  '692': '#E8BFBA',
                  '693': '#DBA8A5',
                  '694': '#C98C8C',
                  '695': '#B26B70',
                  '696': '#8E4749',
                  '697': '#7F383A',
                  '698': '#F7D1CC',
                  '699': '#F7BFBF',
                  '700': '#F2A5AA',
                  '701': '#E8878E',
                  '702': '#D6606D',
                  '703': '#B73844',
                  '704': '#9E2828',
                  '705': '#F9DDD6',
                  '706': '#FCC9C6',
                  '707': '#FCADAF',
                  '708': '#F98E99',
                  '709': '#F26877',
                  '710': '#E04251',
                  '711': '#D12D33',
                  '712': '#FFD3AA',
                  '713': '#F9C9A3',
                  '714': '#F9BA82',
                  '715': '#FC9E49',
                  '716': '#F28411',
                  '717': '#D36D00',
                  '718': '#BF5B00',
                  '719': '#F4D1AF',
                  '720': '#EFC49E',
                  '721': '#E8B282',
                  '722': '#D18E54',
                  '723': '#BA7530',
                  '724': '#8E4905',
                  '725': '#753802',
                  '726': '#EDD3B5',
                  '727': '#E2BF9B',
                  '728': '#D3A87C',
                  '729': '#C18E60',
                  '730': '#AA753F',
                  '731': '#723F0A',
                  '732': '#60330A',
                  '801': '#00AACC',
                  '802': '#60DD49',
                  '803': '#FFED38',
                  '804': '#FF9338',
                  '805': '#F95951',
                  '806': '#FF0093',
                  '807': '#D6009E',
                  '808': '#00B59B',
                  '809': '#DDE00F',
                  '810': '#FFCC1E',
                  '811': '#FF7247',
                  '812': '#FC2366',
                  '813': '#E50099',
                  '814': '#8C60C1',
                  '871': '#86754D',
                  '872': '#8D734A',
                  '873': '#8B6E4A',
                  '874': '#8C6F4B',
                  '875': '#906D4F',
                  '876': '#98694C',
                  '877': '#8E9090',
                  '8003': '#8B7E70',
                  '8021': '#9B7A69',
                  '8062': '#A5717E',
                  '8100': '#917594',
                  '8201': '#5E839B',
                  '8281': '#6F9795',
                  '8321': '#819579',
                  'Yellow': '#FFDD00',
                  'Yellow 012': '#FFD700',
                  'Orange 021': '#FF5000',
                  'Warm Red': '#FF4338',
                  'Red 032': '#F7323F',
                  'Rubine Red': '#D60057',
                  'Rhadamine Red': '#E70095',
                  'Purple': '#C227B9',
                  'Violet': '#430098',
                  'Blue 072': '#060E9F',
                  'Reflex Blue': '#001689',
                  'Process Blue': '#0082CA',
                  'Green': '#00A887',
                  'Black': '#2E2A25',
                  'Yellow 0131': '#F5F0A1',
                  'Red 0331': '#FFAFBB',
                  'Magenta 0521': '#F5B2DB',
                  'Violet 0631': '#C39BDE',
                  'Blue 0821': '#72D0EB',
                  'Green 0921': '#9BE7D8',
                  'Black 0961': '#A0968C',
                  'Warm Gray 1': '#D8D1CA',
                  'Warm Gray 2': '#CDC3BB',
                  'Warm Gray 3': '#C1B8AF',
                  'Warm Gray 4': '#B7ADA5',
                  'Warm Gray 5': '#AEA299',
                  'Warm Gray 6': '#A79C94',
                  'Warm Gray 7': '#978B82',
                  'Warm Gray 8': '#8E8279',
                  'Warm Gray 9': '#86786F',
                  'Warm Gray 10': '#7B6E66',
                  'Warm Gray 11': '#706259',
                  'Cool Gray 1': '#DBD9D6',
                  'Cool Gray 2': '#D2D0CD',
                  'Cool Gray 3': '#CAC8C8',
                  'Cool Gray 4': '#BDBBBB',
                  'Cool Gray 5': '#B3B2B1',
                  'Cool Gray 6': '#A9A8A9',
                  'Cool Gray 7': '#99999A',
                  'Cool Gray 8': '#8A8A8D',
                  'Cool Gray 9': '#77777A',
                  'Cool Gray 10': '#646569',
                  'Cool Gray 11': '#55565A',
                  'Black 2': '#342E1F',
                  'Black 3': '#222720',
                  'Black 4': '#31251C',
                  'Black 5': '#3F2B2F',
                  'Black 6': '#111820',
                  'Black 7': '#3E3935',
            }
);