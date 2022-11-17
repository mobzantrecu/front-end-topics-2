import fieldName from "../../decorators/field.decorator";
import headerName from "../../decorators/headerName.decorator";
import renderCell from "../../decorators/renderCell.decorator";
import titleRenderCell from "./renderCells";

class Product {
  @fieldName("title")
  @headerName("Title")
  title: string = "";

  @fieldName("status")
  @headerName("status")
  @renderCell(titleRenderCell)
  status: number = 0;
}

export default Product;
