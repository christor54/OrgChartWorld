(function () { 
    if (!mstrmojo.plugins.OrgCharWorld) {
        mstrmojo.plugins.OrgCharWorld = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.OrgCharWorld.OrgCharWorldDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.OrgCharWorld.OrgCharWorldDropZones",
            cssClass: "orgcharworlddropzones",
            getCustomDropZones: function getCustomDropZones(){
  return [ 
 { 
name: 'Manager', 
maxCapacity:1, 
title:'Drag Manager Attribute here ', 
allowObjectType:1
 }, { 
name: 'Employee', 
maxCapacity:1, 
title:'Drag Employee Attribute Here', 
allowObjectType:1
 }, { 
name: 'Title', 
maxCapacity:1, 
title:'Drag the attribute containing employees’ title here', 
allowObjectType:1
 }, { 
name: 'Metric', 
maxCapacity:1, 
title:'Drag any metric here, it will not be used, but it is necessary to render the visualization', 
allowObjectType:2
 }
 ];},
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 
 return {allowedItems: dragObjects};


            




},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 
 // Optional: Define the behavior after objects are dropped to a zone
  
 
  
 
 
 


            





},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
  
 // Optional: Define the behavior after objects are removed from a zone


  debugger;
  var actions = [];
  switch (this.getDropZoneName(zone)) {
    case 'Employee': //If removed from size dropzone also remove it from Title dropzone
      this.getRemoveDropZoneObjectsActions(actions, 'Title', objects);
      break;
  }
  return actions;




},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 
 // Optional: Define the RMC context menu for an object
 
  
 
 
 


            





}
})}());
//@ sourceURL=OrgCharWorldDropZones.js