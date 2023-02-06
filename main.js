const person= {
			 first_name: 'Monica',
			 last_name: 'Geller',
			 phone: '915-996-9739',
			 email: 'monica37@gmail.com',
			 address: {
				  street :{
						 street_num: '495',
						 street_name: 'Grove Street',
						},
				 city : 'New York',
				 country: 'USA'
			 },
			};
			 
		const isObject = function(val){
			 if(val==null){
				 return false;
				 }
				 return typeof val === "object";
			};
			
		const nested = function(obj){
			  for(let key in obj){
				 if(isObject(obj[key])){
					 for(let innerkey in obj[key]){
						if(isObject(obj[key][innerkey])){
							 for(let street in obj[key][innerkey]){
						 console.log(`${street} => ${obj[key][innerkey][street]}`)
							 }
						 }
						 else{
						 console.log(`${innerkey} =>${obj[key][innerkey]}`)
						   }
						 
						}
					 }
					 else{
						 console.log(`${key} => ${obj[key]}`);
					}
				
				}
			 }
			 nested(person)