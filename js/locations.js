//Define the click functions with values for the lines and popups.

$(document).ready(function(){

// Clear the Map
	
	$('.clearmap').click(function() {
			location.reload();
	});
	
	
//The Collection
	
	$('.collA').click(function() {
		var collA = [
		"General Works (A)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	// html of popup
			[
			mapHeight - 795, 	// distance of endpoint from top
			289,				// distance of endpoint from left
			mapHeight - 735,	// distance of point 3 from top
			175,				// distance of point 3 from left
			mapHeight - 646,	// distance of point 2 from top
			430,				// distance of point 2 from left
			mapHeight - 1239,	// distance of point 1 from top
			430,				// distance of point 1 from left
			mapOriginLat,		
			mapOriginLong
			]
		];
		drawLine(collA);
	});
	
	$('.collB').click(function() {
		var collB = [
		"Philosophy, Psychology,<br>and Religion (B)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
			mapHeight - 830,353,mapHeight - 735,175,mapHeight - 646,430,mapHeight - 1239,430,				
			mapOriginLat,		
			mapOriginLong
			]
		];
			drawLine(collB);
	});
	
	$('.collC').click(function() {
		var collC = [
			"History (C,D,E, and F)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 742,724,mapHeight - 630,480,mapHeight - 646,430,mapHeight - 1239,430,				
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collC);
	});
	
	$('.collGN').click(function() {
		var collGN = [
			"Anthropology and Folklore (GN - GV)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 778,743,mapHeight - 766,775,mapHeight - 630,480,mapHeight - 646,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collGN);
	});
	
	$('.collH').click(function() {
		var collH = [
			"Social Sciences (H)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 350,285,mapHeight - 292,176,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collH);
	});
	
	$('.collJ').click(function() {
		var collJ = [
			"Political Science (J)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 263,640,mapHeight - 187,482,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collJ);
	});
	
	$('.collK').click(function() {
		var collK = [
			"Law (K)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 263,640,mapHeight - 187,482,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collK);
	});
	
	$('.collL').click(function() {
		var collL = [
			"Education (L)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 397,376,mapHeight - 292,176,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collL);
	});
	
	$('.collM').click(function() {
		var collM = [
			"Music (M)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 139,629,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collM);
	});
	
	$('.collN').click(function() {
		var collN = [
			"Fine Arts (N)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 161,793,mapHeight - 118,688,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collN);
	});
	
	$('.collP').click(function() {
		var collP = [
			"Language and Literature (P)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 298,714,mapHeight - 187,482,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collP);
	});
	
	$('.collTR').click(function() {
		var collTR = [
			"Photography (TR)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 239,814,mapHeight - 208,900,mapHeight - 118,688,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collTR);
	});
	
	$('.collZ').click(function() {
		var collZ = [
			"Bibliography<br>and Library Science (Z)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 	
			[
				mapHeight - 218,924,mapHeight - 118,688,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collZ);
	});
	
	$('.collOV').click(function() {
		var collOV = [
			"Oversize<br><a href='http://cruzcat.ucsc.edu/'>Search</a>",
			[
				mapHeight - 336,798,mapHeight - 187,483,mapHeight - 204,430,mapHeight - 1239,430,				
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collOV);
	});
	
	$('.collCC').click(function() {
		var collCC = [
			"Curriculum Collection<br><a href='http://cruzcat.ucsc.edu/'>Search</a>",
			[
				mapHeight - 252,1007,mapHeight - 118,688,mapHeight - 204,430,mapHeight - 1239,430,				
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collCC);
	});
	
	$('.collGD').click(function() {
		var collGD = [
			"Government Documents<br><a href='http://cruzcat.ucsc.edu/'>Search</a>",
			[
				mapHeight - 1305,523,mapHeight - 1258,657,				
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collGD);
	});
	
	$('.collRF').click(function() {
		var collRF = [
			"Reference Books<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 1305,523,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collRF);
	});
	
	$('.collRR').click(function() {
		var collRR = [
			"Ready Reference<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 1263,842,mapHeight - 1201,706,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collRR);
	});
	
	$('.collNP').click(function() {
		var collNP = [
			"Newspapers<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 1283,524,mapHeight - 1236,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collNP);
	});
	
	$('.collMF').click(function() {
		var collMF = [
			"Microforms<br>(Located at the Circulation Desk)<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 1175,876,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collMF);
	});
	
	$('.collSP').click(function() {
		var collSP = [
			"Special Collections<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 553,721,mapHeight - 646,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collSP);
	});
	
	$('.collAV').click(function() {
		var collAV = [
			"Audio and Video<br><a href='http://cruzcat.ucsc.edu/'>Search</a>", 		// html of popup
			[
				mapHeight - 2565,603,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(collAV);
	});

// Computers, Copiers, and Printers

	$('.infComN').click(function() {
		var infComN = [
			"Information Commons<br>North<br><a href='https://library.ucsc.edu/services/information-commons-north'>More..</a>", 		// html of popup
			[
				mapHeight - 1222,707,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(infComN);
	});

	$('.infComS').click(function() {
		var infComS = [
			"Information Commons<br>South<br><a href='https://library.ucsc.edu/services/second-floor-information-commons-south'>More...</a>", 		// html of popup
			[
				mapHeight - 1362,365,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(infComS);
	});

	$('.infComNP').click(function() {
		var infComNP = [
			"Information Commons<br>North Printers<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing'>Help</a>", 		// html of popup
			[
				mapHeight - 1228,861,mapHeight - 1248,804,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(infComNP);
	});

	$('.infComSP').click(function() {
		var infComSP = [
			"Info Commons South<br>Printers and Copiers<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing'>Help</a>", 		// html of popup
			[
				mapHeight - 1469,439,mapHeight - 1391,285,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(infComSP);
	});

	$('.microP').click(function() {
		var microP = [
			"Microfilm Printers", 		// html of popup
			[
				mapHeight - 1310,447,mapHeight - 1236,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(microP);
	});

	$('.microS').click(function() {
		var microS = [
			"Microfilm Scanner", 		// html of popup
			[
				mapHeight - 1469,439,mapHeight - 1391,285,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(microS);
	});

	$('.copy3').click(function() {
		var copy3 = [
			"Audio and Video<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing'>Help</a>", 		// html of popup
			[
				mapHeight - 670,364,mapHeight - 646,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(copy3);
	});

	$('.copy4').click(function() {
		var copy4 = [
			"4th Floor Copiers<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing'>Help</a>", 		// html of popup
			[
				mapHeight - 224,364,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(copy4);
	});

	$('.dscL').click(function() {
		var dscL = [
			"Digital Scholarship<br>Commons Lab<br><a href='http://calendar.library.ucsc.edu/booking/dsc-labs'>Reserve</a>", 		// html of popup
			[
				mapHeight - 2610,449,mapHeight - 2557,587,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscL);
	});

	$('.dscV').click(function() {
		var dscV = [
			"Vizwall<br><a href='https://guides.library.ucsc.edu/DSC/VizWall'>More...</a>", 		// html of popup
			[
				mapHeight - 2529,571,mapHeight - 2538,548,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscV);
	});

	$('.dscP').click(function() {
		var dscP = [
			"Digital Scholarship<br>Commons Printer<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing/'>Help</a>",
			[
				mapHeight - 2505,645,mapHeight - 2542,557,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscP);
	});
	
// Digital Scholarship Commons
	
	$('.dscD').click(function() {
		var dscD = [
			"DSC Service Desk<br><a href='https://guides.library.ucsc.edu/mediadesk'>More...</a>",
			[
				mapHeight - 2561,595,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscD);
	});
	
	$('.dscL').click(function() {
		var dscL = [
			"DSC Lab<br><a href='http://calendar.library.ucsc.edu/booking/dsc-labs'>Help</a>",
			[
				mapHeight - 2610,449,mapHeight - 2557,587,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscL);
	});
	
	$('.dscV').click(function() {
		var dscV = [
			"Vizwall<br><a href='https://guides.library.ucsc.edu/DSC/VizWall'>More...</a>",
			[
				mapHeight - 2529,571,mapHeight - 2538,548,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscV);
	});
	
	$('.r0331').click(function() {
		var r0331 = [
			"Group Viewing Rooms<br>0331-0332<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2451,369,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0331);
	});
	
	$('.r0333').click(function() {
		var r0333 = [
			"Keyboard Practice Room<br>0333<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2476,419,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0333);
	});
	
	$('.r0334').click(function() {
		var r0334 = [
			"Group Viewing Rooms<br>0334-0336<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2476,419,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0334);
	});
	
	$('.r0337').click(function() {
		var r0337 = [
			"Accessible Technology Room<br>0337<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2495,458,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0337);
	});
	
	$('.r0338').click(function() {
		var r0338 = [
			"Group Viewing Room<br>0338<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2495,458,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0338);
	});
	
	$('.r0339').click(function() {
		var r0339 = [
			"Listening Rooms<br>0339-0342<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2506,480,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0339);
	});
	
	$('.r0343').click(function() {
		var r0343 = [
			"Group Listening Room<br>0343<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2527,525,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0343);
	});
	
	$('.r0344').click(function() {
		var r0344 = [
			"Podcasting Room<br>0344<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2488,567,mapHeight - 2460,508,mapHeight - 2485,436,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0344);
	});
	
	$('.r0345').click(function() {
		var r0345 = [
			"Group Viewing Rooms<br>0345-0346<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2488,567,mapHeight - 2460,508,mapHeight - 2485,436,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0345);
	});
	
	$('.r0349').click(function() {
		var r0349 = [
			"DSC Vizlab<br>Room 0349<br><a href='http://calendar.library.ucsc.edu/booking/dsc-labs'>Reserve</a>",
			[
				mapHeight - 2493,578,mapHeight - 2460,508,mapHeight - 2485,436,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0349);
	});

	$('.r0359').click(function() {
		var r0359 = [
			"Group Viewing Room<br>0359<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2627,524,mapHeight - 2601,471,mapHeight - 2556,587,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0359);
	});
	
	$('.r0384').click(function() {
		var r0384 = [
			"Digital Production Studio<br>Room 0384<br><a href='https://guides.library.ucsc.edu/DSC/ProductionStudio'>More...</a>",
			[
				mapHeight - 2664,482,mapHeight - 2623,406,mapHeight - 2556,587,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0384);
	});
	
// Faculty Instructional Technology Center (FITC)
	
	$('.r1367').click(function() {
		var r1367 = [
			"Video Studio<br>Room 1367<br><a href='https://its.ucsc.edu/fitc/'>More...</a>",
			[
				mapHeight - 2050,715,mapHeight - 2029,767,mapHeight - 1886,463,mapHeight - 1905,409,mapHeight - 1862,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1367);
	});

	$('.r1330').click(function() {
		var r1330 = [
			"FITC Office<br>Room 1330<br><a href='https://its.ucsc.edu/fitc/'>More...</a>",
			[
				mapHeight - 1849,359,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1330);
	});
	
	$('.r1330A').click(function() {
		var r1330A = [
			"Center for Innovations<br>in Teaching and Learning<br>Room 1330A<br><a href='https://citl.ucsc.edu/'>More...</a>",
			[
				mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1330A);
	});
	
	$('.r1349').click(function() {
		var r1349 = [
			"Editing Suite 1<br>Room 1349<br><a href='https://its.ucsc.edu/fitc/'>More...</a>",
			[
				mapHeight - 1968,639,mapHeight - 1886,463,mapHeight - 1905,409,mapHeight - 1862,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1349);
	});
	
	$('.r1330B').click(function() {
		var r1330B = [
			"Faculty Lab<br>Room 1330B<br><a href='https://its.ucsc.edu/fitc/fitc-lab.html'>More...</a>",
			[
				mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1330B);
	});
	
	$('.r1336').click(function() {
		var r1336 = [
			"Conference Room<br>1336<br><a href='https://its.ucsc.edu/fitc/'>More...</a>",
			[
				mapHeight - 1899,427,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1336);
	});
	
	$('.r1340').click(function() {
		var r1340 = [
			"Active learning<br>Classroom 2<br>Room 1340<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1921,537,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1340);
	});
	
	$('.r1343').click(function() {
		var r1343 = [
			"Media Editing Suite 1<br>Room 1343<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1941,582,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1343);
	});
	
	$('.r1345').click(function() {
		var r1345 = [
			"Media Editing Suite 2<br>Room 1345<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1951,601,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1345);
	});
	
	$('.r1346').click(function() {
		var r1346 = [
			"Instructional Studio 2<br>Room 1340<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1951,601,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1346);
	});
	
	$('.r1347').click(function() {
		var r1347 = [
			"Media Editing Suite 3<br>Room 1347<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1961,623,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1347);
	});
	
	$('.r1350').click(function() {
		var r1350 = [
			"Active Learning<br>Classroom 1<br>Room 1350<br><a href='https://its.ucsc.edu/fitc/service-forms/room-reservation-form.html'>Reserve</a> (Faculty Only)",
			[
				mapHeight - 1980,663,mapHeight - 1886,463,mapHeight - 1903,408,mapHeight - 1863,323,mapHeight - 1825,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r1350);
	});
	
// Education and Mathematics
	
	$('.edC').click(function() {
		var edC = [
			"Education Classrooms<br><a href='https://education.ucsc.edu/'>More...</a>",
			[
				mapHeight - 1829,1088,mapHeight - 1685,725,mapHeight - 1058,725,mapHeight - 1082,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(edC);
	});
	
	$('.edD').click(function() {
		var edD = [
			"Education Department<br>Offices<br><a href='https://education.ucsc.edu/'>More...</a>",
			[
				mapHeight - 1112,391,mapHeight - 1079,502,mapHeight - 1108,570,mapHeight - 1083,652,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(edD);
	});
	
	$('.edF').click(function() {
		var edF = [
			"Eduction Faculty<br>Offices<br><a href='https://education.ucsc.edu/'>More...</a>",
			[
				mapHeight - 499,725,mapHeight - 1052,725,mapHeight - 1076,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(edF);
	});
	
	$('.havcC').click(function() {
		var havcC = [
			"History of Art<br>and Visual Culture<br>Classrooms<br><a href='http://havc.ucsc.edu/'>More...</a>",
			[
				mapHeight - 1829,1088,mapHeight - 1685,725,mapHeight - 1058,725,mapHeight - 1082,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(havcC);
	});
	
	$('.mathC').click(function() {
		var mathC = [
			"Mathematics Classrooms<br><a href='https://www.math.ucsc.edu/'>More...</a>",
			[
				mapHeight - 1829,1088,mapHeight - 1685,725,mapHeight - 1058,725,mapHeight - 1082,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(mathC);
	});
	
	$('.mathD').click(function() {
		var mathD = [
			"Mathematics Department<br>Offices<br><a href='https://www.math.ucsc.edu/'>More...</a>",
			[
				mapHeight - 51,725,mapHeight - 1052,725,mapHeight - 1076,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(mathD);
	});
	
	$('.mathF').click(function() {
		var mathF = [
			"Mathematics Faculty<br>Offices<br><a href='https://www.math.ucsc.edu/'>More...</a>",
			[
				mapHeight - 51,725,mapHeight - 1052,725,mapHeight - 1076,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(mathF);
	});
	
// Food and Attractions
	
	$('.deadC').click(function() {
		var deadC = [
			"Brittingham<br>Dead Central<br><a href='https://guides.library.ucsc.edu/gratefuldeadarchive/exhibits'>Current Exhibit</a>",
			[
				mapHeight - 1177,629,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(deadC);
	});
	
	$('.gvc').click(function() {
		var gvc = [
			"Global Village<br>Cafe<br><a href='http://amazonjuicesgvc.com/index.html'>Order Online</a>",
			[
				mapHeight - 1049,573,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(gvc);
	});
	
	$('.vendS').click(function() {
		var vendS = [
			"Ground Floor<br>Snack Vending<br>Machines",
			[
				mapHeight - 2384,466,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(vendS);
	});
	
	$('.vendI').click(function() {
		var vendI = [
			"Instructional Supplies<br>Vending Machine",
			[
				mapHeight - 1469,439,mapHeight - 1391,285,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(vendI);
	});
	
	$('.messB').click(function() {
		var messB = [
			"Message Board",
			[
				mapHeight - 1107,833,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(messB);
	});
	
// Library Offices and Conference Rooms
	
	$('.commA').click(function() {
		var commA = [
			"Community Area<br><a href='https://library.ucsc.edu/library-donors'>Donor Wall</a>",
			[
				mapHeight - 1132,882,mapHeight - 1110,825,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(commA);
	});
	
	$('.r4211').click(function() {
		var r4211 = [
			"Administrative Office<br><a href='https://guides.library.ucsc.edu/contactus/administration'>Contact</a>",
			[
				mapHeight - 87,784,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r4211);
	});
	
	$('.r2320').click(function() {
		var r2320 = [
			"Conference Room 2320",
			[
				mapHeight - 1346,767,mapHeight - 1280,621,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r2320);
	});
	
	$('.r4221').click(function() {
		var r4221 = [
			"Conference Room 4221",
			[
				mapHeight - 103,735,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r4221);
		
	});	
	
	$('.specC').click(function() {
		var specC = [
			"Special Collections<br>and Archives<br><a href='https://guides.library.ucsc.edu/speccoll'>More...</a>",
			[
				mapHeight - 531,782,mapHeight - 647,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(specC);
	});
	
// Library Service Desks
	
	$('.circD').click(function() {
		var circD = [
			"Circulation<br>Service Desk<br><a href='https://guides.library.ucsc.edu/borrowing/circulation'>More...</a>",
			[
				mapHeight - 1167,859,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(circD);
	});

	$('.compD').click(function() {
		var compD = [
			"Computing Help Desk<br><a href='https://library.ucsc.edu/services/computing/printing-and-computing'>More...</a>",
			[
				mapHeight - 1212,830,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(compD);
	});

	$('.dscD').click(function() {
		var dscD = [
			"Digital<br>Scholarship Commons<br>Service Desk<br><a href='https://guides.library.ucsc.edu/mediadesk'>More...</a>",
			[
				mapHeight - 2561,595,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(dscD);
	});

	$('.refD').click(function() {
		var refD = [
			"Reference Help Desk<br><a href='https://guides.library.ucsc.edu/ask-a-librarian'>Ask a Librarian</a>",
			[
				mapHeight - 1189,813,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(refD);
	});
	
// Restrooms, Elevators, and Stairs
	
	$('.restGI').click(function() {
		var restGI = [
			"Gender Inclusive<br>Restroom",
			[
				mapHeight - 2419,574,mapHeight - 2377,483,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(restGI);
	});
	
	$('.restN').click(function() {
		var restN = [
			"Second Floor<br>North Restrooms",
			[
				mapHeight - 1197,558,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(restN);
	});
	
	$('.restS').click(function() {
		var restS = [
			"Second Floor<br>South Restrooms",
			[
				mapHeight - 1299,249,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(restS);
	});
	
	$('.el').click(function() {
		var el = [
			"Second Floor<br>Elevators",
			[
				mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(el);
	});
	
	$('.elN').click(function() {
		var elN = [
			"Second Floor<br>North Elevator",
			[
				mapHeight - 1051,725,mapHeight - 1077,648,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(elN);
	});
	
// Study areas and classrooms
	
	$('.r0351').click(function() {
		var r0351 = [
			"Group Study Room<br>0351<br><a href='http://calendar.library.ucsc.edu/booking/mchmc'>Reserve</a>",
			[
				mapHeight - 2498,682,mapHeight - 2544,561,mapHeight - 2431,324,mapHeight - 2395,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r0351);
	});
	
	$('.readRW').click(function() {
		var readRW = [
			"Second Floor<br>West Reading Room",
			[
				mapHeight - 1289,277,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(readRW);
	});
	
	$('.readRE').click(function() {
		var readRE = [
			"Second Floor<br>East Reading Room",
			[
				mapHeight - 1518,534,mapHeight - 1391,285,mapHeight - 1258,657,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(readRE);
	});
	
	$('.r2351').click(function() {
		var r2351 = [
			"Group Study Room<br>2351<br><a href='http://calendar.library.ucsc.edu/booking/mch2'>Reserve</a>",
			[
				mapHeight - 1335,664,mapHeight - 1303,750,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r2351);
	});
	
	$('.r2353').click(function() {
		var r2353 = [
			"Classroom 2353",
			[
				mapHeight - 1351,618,mapHeight - 1303,750,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r2353);
	});
	
	$('.r2359').click(function() {
		var r2359 = [
			"Classroom 2359",
			[
				mapHeight - 1380,540,mapHeight - 1303,750,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r2359);
	});
	
	$('.studyR3').click(function() {
		var studyR3 = [
			"Third Floor Study Rooms<br><a href='http://calendar.library.ucsc.edu/booking/mch3'>Reserve</a>",
			[
				mapHeight - 856,707,mapHeight - 801,853,mapHeight - 630,480,mapHeight - 646,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(studyR3);
	});
	
	$('.studyH3').click(function() {
		var studyH3 = [
			"Third Floor Study Hall",
			[
				mapHeight - 832,348,mapHeight - 735,175,mapHeight - 646,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(studyH3);
	});
	
	$('.readPW').click(function() {
		var readPW = [
			"Fourth Floor<br>West Reading Porch<br><a href='https://library.ucsc.edu/services/fourth-floor-reading-porches'>More</a>",
			[
				mapHeight - 310,118,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(readPW);
	});
	
	$('.readPE').click(function() {
		var readPE = [
			"Fourth Floor<br>East Reading Porch<br><a href='https://library.ucsc.edu/services/fourth-floor-reading-porches'>More</a>",
			[
				mapHeight - 479,527,mapHeight - 292,176,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(readPE);
	});
	
	$('.studyH4').click(function() {
		var studyH4 = [
			"Fourth Floor Study Hall",
			[
				mapHeight - 390,361,mapHeight - 292,176,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(studyH4);
	});
	
	$('.studyQ4').click(function() {
		var studyQ4 = [
			"Fourth Floor<br>Quiet Study Area",
			[
				mapHeight - 304,973,mapHeight - 355,841,mapHeight - 187,483,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(studyQ4);
	});
	
	$('.studyR4').click(function() {
		var studyR4 = [
			"Fourth Floor<br>Study Rooms<br><a href='http://calendar.library.ucsc.edu/booking/mch4'>Reserve</a>",
			[
				mapHeight - 432,636,mapHeight - 476,521,mapHeight - 292,176,mapHeight - 204,430,mapHeight - 1239,430,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(studyR4);
	});
	
	$('.r2316').click(function() {
		var r2316 = [
			"Presentation<br>Practice Room<br>2316<br><a href='http://calendar.library.ucsc.edu/booking/mch2'>Reserve</a>",
			[
				mapHeight - 1323,695,mapHeight - 1303,750,
				mapOriginLat,		
				mapOriginLong
			]
		];
		drawLine(r2316);
	});
	
});