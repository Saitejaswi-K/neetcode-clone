const courseModel = require("../model/courseModel");

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}

module.exports.createCourse = async function(courseInput){
        const course = new courseModel(courseInput);
        await course.save();
}
module.exports.updateCourse = async function(courseId, updateInput){
    await courseModel.findOneAndUpdate({_id : courseId}, updateInput);
}

