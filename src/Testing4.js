import React from "react";

export default function Testing4(props) {
  return (
    <div>
      <div class="flex items-center justify-center p-12">
        <div>
          <form onSubmit={props.handleOnSubmit}>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
              <input
                onChange={props.handleOnChange("firstname")}
                type="text"
                placeholder="First Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">Last Name</label>
              <input
                onChange={props.handleOnChange("lastname")}
                type="text"
                placeholder="Last Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">Salary</label>
              <input
                onChange={props.handleOnChange("salary")}
                type="text"
                placeholder="Salary"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
