
import MealList from "../small_componnent/MealList"
import Searchbar from "../small_componnent/Searchbar"


const List = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Searchbar placeholder="Search for your favorite recipe" />
      </div>
      <div className="p-10">
        <MealList />
      </div>
    </div>
  )
}

export default List
