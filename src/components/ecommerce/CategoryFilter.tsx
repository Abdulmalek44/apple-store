import { TCategory, TLoading } from "@/Types";
import CheckBox from "@/assets/svg/check-box.svg?react";
import { memo } from "react";

type CategoryFilterProps = {
  records: TCategory[];
  filterCategories: string[];
  setFilterCategories: (slugs: string[]) => void;
  status?: TLoading;
};

const CategoryFilter = memo(
  ({
    records,
    filterCategories,
    setFilterCategories,
    status,
  }: CategoryFilterProps) => {
    const chooseCheckbox = (slug: string) => {
      // If the category is already selected, remove it
      if (filterCategories.includes(slug)) {
        const slugCollection = filterCategories.filter(
          (categorySlug) => categorySlug !== slug
        );
        setFilterCategories(slugCollection);
      } else {
        // If the category is not selected, add it
        const slugCollection = [...filterCategories];
        slugCollection.push(slug);
        setFilterCategories(slugCollection);
      }
    };

    const productCategory =
      records.length > 0 ? (
        records.map((record) => (
          <div key={record.name} className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor={record.slug}
            >
              <input
                type="checkbox"
                onChange={() => chooseCheckbox(record.slug)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id={record.slug}
                disabled={status === "pending"}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <CheckBox />
              </span>
            </label>
            <label
              className="mt-px  font-semibold cursor-pointer select-none"
              htmlFor={record.slug}
            >
              {record.name}
            </label>
          </div>
        ))
      ) : (
        <h1>Empty</h1>
      );
    return (
      <div className="flex gap-4 xl:gap-7 flex-col flex-1 mb-5 max-xl:ml-4    ">
        <h3 className="font-bold ">Product Categories</h3>
        {productCategory}
      </div>
    );
  }
);

export default CategoryFilter;
