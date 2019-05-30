gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0xb23e0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - undertale_ost_23_shop_remix_bass_boost_loop_QtOtRxN0P1g.mp3", true, 100, 1);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb23e0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;

gdjs.NewSceneCode.eventsList0xb23e0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
