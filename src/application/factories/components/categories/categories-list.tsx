export const MakeCategoriesList = () => {
  return (
    <CoursesTable
      getAllCourses={makeRemoteGetAllCourses()}
      deleteCourse={makeRemoteDeleteCourse()}
      updateCourse={makeRemoteUpdateCourse()}
    />
  )
}
