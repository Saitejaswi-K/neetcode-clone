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

/*module.exports.createFirstCourse = async function(){
    const course = await courseModel.find({});
    if(course && course.length == 0){
        const firstCourseInput = {
            "title" : "BZ DSA",
            "level" : "easy",
        };
        const course = new courseModel(firstCourseInput);
        await course.save();
    }
}*/