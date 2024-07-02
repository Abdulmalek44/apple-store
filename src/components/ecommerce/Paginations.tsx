import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TPaginationsprops = {
  currentPage: number;
  TotalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const Paginations = ({
  currentPage,
  TotalPages,
  setCurrentPage,
}: TPaginationsprops) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < TotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem
            className={currentPage === 1 ? " hidden" : "cursor-pointer"}
          >
            <PaginationPrevious onClick={handlePreviousClick} />
          </PaginationItem>
          {/* Previous Page */}
          <PaginationItem className={currentPage === 1 ? "hidden" : ""}>
            <PaginationLink
              className="cursor-pointer"
              onClick={handlePreviousClick}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
          {/* Current Page */}
          <PaginationItem>
            <PaginationLink className="cursor-not-allowed" isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {/* Next Page */}
          <PaginationItem
            className={currentPage === TotalPages ? "hidden" : "cursor-pointer"}
          >
            <PaginationLink
              className="cursor-pointer"
              onClick={handleNextClick}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
          {/* ... */}
          <PaginationItem
            className={
              currentPage === TotalPages - 1 || currentPage === TotalPages
                ? "hidden"
                : ""
            }
          >
            <PaginationEllipsis />
          </PaginationItem>
          {/* Next Button */}
          <PaginationItem
            className={currentPage === TotalPages ? "hidden" : "cursor-pointer"}
          >
            <PaginationNext onClick={handleNextClick} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default Paginations;
