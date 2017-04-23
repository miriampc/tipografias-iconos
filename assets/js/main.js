var htmlElements=[{id:'n1',parentId:'',element:'form', classElem:'form-container',type:'principal'},
                  {id:'n11',parentId:'n1',element:'header', classElem:'header',type:'parent'},
                  {id:'n111',parentId:'n11',element:'nav', classElem:'menu left',type:'parent-child'},
                  {id:'n112',parentId:'n11',element:'nav', classElem:'menu',type:'parent-child'},
                  {id:'n12',parentId:'n1',element:'section', classElem:'container',type:'parent'},
                  {id:'n121',parentId:'n12',element:'aside', classElem:'blogger',type:'parent-child'},
                  {id:'n122',parentId:'n12',element:'aside', classElem:'blog',type:'parent-child'},
                  {id:'n13',parentId:'n1',element:'footer', classElem:'footer',type:'parent'}];

window.addEventListener('load',function(){
    var docFragment=document.createDocumentFragment();
    
    htmlElements.forEach(function(e){
        if(e.parentId!=''){
            return;
        }
        var padre =  htmlElements.filter(function(pe){return pe.id==e.id});
        var elemento=document.createElement(padre[0].element);
        
        //elemento.classList.add(e.classElem.toString());
        elemento.setAttribute("class",e.classElem);
        document.body.prepend(elemento);
        searchTagHtml(e.id, elemento);
        console.log(elemento);
    });
    
    function searchTagHtml(idTag, elementParent){
      var list=  htmlElements.filter(function(e){return e.parentId==idTag});
        
        if(list.length == 0)
            return;
        
        for(var a in list){
            var elementChild=document.createElement(list[a].element);
            //elementChild.classList.add(list[a].classElem);
            elementChild.setAttribute("class",list[a].classElem);
            elementParent.appendChild(elementChild);            
            searchTagHtml(list[a].id, elementChild);
        }        
    }    
    
});