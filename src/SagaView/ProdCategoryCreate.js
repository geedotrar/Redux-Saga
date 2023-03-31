import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddProdCategoryRequest } from "../ReduxSaga/Action/ProdCategoryAction";

export default function ProdCategoryCreate(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: undefined,
      description: undefined,
    },
    onSubmit: async (values) => {
      console.log(values);
      dispatch(AddProdCategoryRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });
  return (
    <div>
      <div>
        <div class="flex items-center justify-center p-12">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">Category Name</label>
                <input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Category Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">Description</label>
                <input
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Description"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">CreatedAt</label>
                <input disabled type="text" placeholder={new Date()} class="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div>
                <button type="submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
                <button onClick={() => props.setDisplay(false)} class="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
