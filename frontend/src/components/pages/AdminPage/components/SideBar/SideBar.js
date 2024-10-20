import React , {useState , useEffect} from 'react';
import { MdAssignmentAdd } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';


export const SideBar = (props) => {

    const [activeLink , setActiveLink] = useState('Admin');

    const location = useLocation();

    useEffect(() => {
      
      if (location.pathname === "/admin-page/addproduct") {
        setActiveLink('Add_Product');
      } else if (location.pathname === "/admin-page/allproducts") {
        setActiveLink("Product_List");
      } else {
       setActiveLink('Admin');
      }

    }, [location.pathname])
    


  return (
    <>
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeLink}
        className="mx-auto"
      >
        <div className="p-0 m-0 row w-100">
          <div className="m-0 px-2 d-flex flex-row justify-content-lg-around justify-content-start col-12 col-lg-3 col-xl-2">
            <Nav
              variant="pills"
              className="flex-md-row flex-lg-column my-2 my-lg-0 mt-lg-3"
            >
              <Nav.Item className="my-1 mx-1 mx-lg-0">
                <Nav.Link
                  eventKey="Admin"
                  className="bg-white p-0 m-0"
                ></Nav.Link>
              </Nav.Item>

              <Nav.Item
                className="my-1 mx-1 mx-lg-0"
              >
                <Link to="/admin-page/addproduct">
                  <Button
                    eventKey="Add_Product"
                    variant={
                      activeLink === "Add_Product"
                        ? "secondary"
                        : "outline-secondary"
                    }
                    className=" px-4 py-2 w-100 "
                  >
                    <MdAssignmentAdd className="fs-5 me-1 p-0 m-0" />
                    <span className="align-bottom">Add Product</span>
                  </Button>
                </Link>
              </Nav.Item>

              <Nav.Item
                className="my-1 mx-1 mx-lg-0 "
              >
                  <Link to="/admin-page/allproducts">
                    <Button
                      eventKey="Product_List"
                      variant={
                        activeLink === "Product_List"
                          ? "secondary"
                          : "outline-secondary"
                      }
                      className="px-4 py-2 p-0 m-0 w-100"
                    >
                      <FaClipboardList className="fs-5 me-1" />
                      <span className="align-bottom">Product List</span>
                    </Button>
                  </Link>
              </Nav.Item>
            </Nav>

            <div className="vertical-divider d-none d-lg-block"></div>
          </div>

          <div className="horizontal-divider d-block d-lg-none"></div>

          <div className="col-12 col-lg-9 col-xl-10 m-0 p-0 pe-xl-2">
            <Tab.Content>
              <Tab.Pane eventKey="Admin" className="p-0 m-0">
                <div className='py-5' id='SideContent'>
                  <h2 className="text-warning fw-bold text-center my-5 py-5">
                    Hello Welcome !
                  </h2>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="Add_Product" className="p-0 m-0">
                {props.AddProductForm}
              </Tab.Pane>

              <Tab.Pane eventKey="Product_List" >{props.ProductsList}</Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
}
