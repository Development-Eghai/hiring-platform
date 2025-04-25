import CustomButton from "../Button/Button";

const CustomPagination = ({ currentPage, totalPages, onPageChange , setRowsPerPages ,setCurrentPage , rowsPerPages }) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1)
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1)
    };


    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {

            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {

            pages.push(1)
            if (currentPage > 3) pages.push("...")

            let start = Math.max(2, currentPage - 1)
            let end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            if (currentPage < totalPages - 2) pages.push("...")
            pages.push(totalPages)
        }

        return pages;
    };

    return (
        <div  className="pagination-container d-flex justify-content-between align-items-center gap-2 pt-3 ">

            <div className="d-flex align-items-center ">
                <span>Show</span>
                <select
                    value={rowsPerPages}
                    onChange={(e) => {
                        setRowsPerPages(Number(e.target.value))
                        setCurrentPage(1)
                    }}
                    className="form-select w-auto mx-2 "
                >
                    {[5, 10].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <span>entries</span>
            </div>

            <div className="d-flex justify-content-between align-items-center gap-2 ">

                <CustomButton label="Prev" variant="none" className="border-0 bg-white shadow" onClick={handlePrev} disabled={currentPage === 1} />

                {getPageNumbers().map((page, index) =>
                    page === "..." ? (
                        <CustomButton label="..." variant="none" className="bg-white border-0 shadow" />
                    ) : (
                        <CustomButton
                            label={page}
                            variant="none"
                            key={index}
                            className={`btn ${currentPage === page ? "pagination_btn shadow" : "border-0 bg-white shadow"}`}
                            onClick={() => onPageChange(page)}
                        >

                        </CustomButton>
                    )
                )}

                <CustomButton label="Next" variant="none" className="border-o bg-white shadow" onClick={handleNext} disabled={currentPage === totalPages}/>
            </div>
            
        </div>
    );
};

export default CustomPagination 