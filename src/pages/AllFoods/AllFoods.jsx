import React, { useState, useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../../assets/fake-data/products";
import ProductCard from "../../components/UI/productCart/ProductCard";
import "./index.scss";
import ReactPaginate from "react-paginate";

const AllFoods = () => {
    const [searchItem, setSearchItem] = useState("");

    //danh so trang
    const [pageNumber, setPageNumber] = useState(0);

    // so card hien thi tren 1 trang
    const productPerPage = 8;

    //searched Product
    const searchedProduct = products.filter((item) =>
        item.title
            .toLocaleLowerCase()
            .includes(searchItem.trim().toLocaleLowerCase())
    );

    //so card da duoc hien thi
    const visitedPage = pageNumber * productPerPage;

    //danh sach cart hien thi tren tung trang
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    //tong so page
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title="All Foods">
            <CommonSection title="All Foods" />
            <section>
                <Container>
                    <Row className="mb-5">
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between">
                                <input
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchItem}
                                    onChange={(e) => {
                                        setSearchItem(e.target.value);
                                        setPageNumber(0);
                                    }}
                                />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>Default</option>
                                    <option value="ascending">
                                        Alphabetically, A-Z
                                    </option>
                                    <option value="descending">
                                        Alphabetically, Z-A
                                    </option>
                                    <option value="high-price">
                                        High Price
                                    </option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {displayPage
                            .filter((item) =>
                                item.title
                                    .toLocaleLowerCase()
                                    .includes(
                                        searchItem.trim().toLocaleLowerCase()
                                    )
                            )
                            .map((item, index) => (
                                <Col
                                    lg="3"
                                    md="4"
                                    sm="6"
                                    xs="12"
                                    key={index}
                                    className="mb-4"
                                >
                                    <ProductCard item={item} />
                                </Col>
                            ))}

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName="paginationBtns"
                                activeClassName="activePage"
                                pageLinkClassName="pageLink"
                                renderOnZeroPageCount={null}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllFoods;
