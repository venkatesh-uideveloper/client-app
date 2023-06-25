import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./common/DeleteModal";
import ListViewComponent from "./common/ListViewComponent";
import CaptionHeader from "./common/CaptionHeader";
import SearchBox from "./common/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getSearchPosts } from "../actions/post";
import Loader from "./common/Loader";

const Dashboard = () => {
  const [deleteId, setDeleteId] = useState(0);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [value, setValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const limit = 2;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(pageNumber, limit));
  }, [pageNumber]);

  const { posts, loading, data, pagination } = useSelector(
    (state) => state.post
  );
  // const { user } = useSelector((state) => state.auth);
  const handleClickViewDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const handleClickAddEdit = (id) => {
    navigate(`/addedit${typeof id === "string" ? "/" + id : ""} `);
  };
  const handleClickDelete = (id) => {
    setOpenDeleteModal(true);
    setDeleteId(id);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchPosts(value, pageNumber, limit));
  };
  const handlePreviousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(data?.totalPosts / limit);
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <>
      <CaptionHeader headerName="Dashboard" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <SearchBox
            handleClickAddEdit={handleClickAddEdit}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          {loading ? (
            <Loader />
          ) : (
            <ListViewComponent
              handleClickViewDetail={handleClickViewDetail}
              handleClickAddEdit={handleClickAddEdit}
              handleClickDelete={handleClickDelete}
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              posts={posts}
              data={data}
              limit={limit}
              pageNumber={pageNumber}
              pagination={pagination}
            />
          )}
        </div>
      </main>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        deleteId={deleteId}
      />
    </>
  );
};

export default Dashboard;
