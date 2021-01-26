'use strict '

// global variable :

var selectionForm=document.getElementById("selectionForm");
var formArray=["car name", "category model", "model year"]
var carForm=document.getElementById("carForm");
var carList=document.getElementById("carLI")
var tableArray=[];
var image=document.getElementById("carImg")

// functions 
function carGarageForm(carName , categoryModel ,modelYear ,image){
    this.name=carName;
    this.categoryModel=categoryModel;
    this.modelYear=modelYear;
    this .url=image;
    tableArray.push(this);
}

carGarageForm.prototype.carGarage=function(){
    var tableUL =document.createElement('ul');

    var tableimg =document.createElement('li');
    tableimg.textContent=this.url ;

    var tablename =document.createElement('li');
    tablename.textContent=this.carName ;

    var tablecategoryModel =document.createElement('li');
    tablecategoryModel.textContent=this.categoryModel ;

    var tablemodelYear =document.createElement('li');
    tablemodelYear.textContent=this.modelYear ;


    tableUL.appendChild(tableimg);
    tableUL.appendChild(tablename);
    tableUL.appendChild(tablecategoryModel);
    tableUL.appendChild(tablemodelYear);

    carList.appendChild(tableUL);
}


function handelForm(){
   event.preventDefault();
   var carName=event.target.carName.value ;
   var categorymodel=event.target.categorymodel.value ;
   var modelyear=event.target.modelyear.value ;
   var image=event.target.image.value 
}
new carGarageForm ('carName' , 'categoryModel' ,'modelYear' ,'image'); 

localStorage.setItem('tablegarage',JSON.stringify(tableArray));




// function call and event listener 

selectionForm.addEventListener('submit', handelForm);
carGarageForm();