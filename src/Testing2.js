import React from "react";

export default function Testing2(props) {
  return (
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form onSubmit={props.OnSubmit}>
          <div class="mb-5">
            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              onChange={props.HandleOnChange("fullname")}
              type="text"
              placeholder="Enter Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
              Salary
            </label>
            <input
              onChange={props.HandleOnChange("salary")}
              type="text"
              name="name"
              placeholder="Enter Salary"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
