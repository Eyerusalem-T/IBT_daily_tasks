"use client";

import { useSearchParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/app/lib/fetcher";

export default function PaginatedMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read current page from URL query string (defaults to 1)
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isValidating } = useSWR(
    `/api/dishes/paginated?page=${page}`,
    fetcher,
    { keepPreviousData: true },
  );

  const navigateToPage = (newPage) => {
    router.push(`/menu?page=${newPage}`);
  };

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Browse Dishes by Page</h3>
      {isValidating && (
        <small style={{ color: "#888" }}>Loading page data...</small>
      )}

      <ul>
        {data?.items?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <button
          disabled={page <= 1}
          onClick={() => navigateToPage(page - 1)}
          style={{
            padding: "6px 12px",
            cursor: page <= 1 ? "not-allowed" : "pointer",
          }}
        >
          &larr; Prev
        </button>

        <span>
          Page {page} of {data?.totalPages || 1}
        </span>

        <button
          disabled={page >= (data?.totalPages || 1)}
          onClick={() => navigateToPage(page + 1)}
          style={{
            padding: "6px 12px",
            cursor: page >= (data?.totalPages || 1) ? "not-allowed" : "pointer",
          }}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
