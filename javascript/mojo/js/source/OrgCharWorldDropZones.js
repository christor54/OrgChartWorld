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
  
 
  
 
 
 


            





},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
   
  
  debugger;  
  
   var actions = [];
  switch (this.getDropZoneName(zone)) {
    case 'Employee': //If removed from size dropzone also remove it from Tooltip dropzone
      this.getRemoveDropZoneObjectsActions(actions, 'Tooltip', items);
      break;
  }
  return actions;
 


            





},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
  
 
  
 
 
 


            





}
})}());
//@ sourceURL=OrgCharWorldDropZones.js