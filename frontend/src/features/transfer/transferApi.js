import { apiSlice } from "../api/apiSlice";

export const transferApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransfers: builder.query({
      query: () => `/api/transfers`,
      providesTags: ["getTransfers"],
    }),
    getTransfer: builder.query({
      query: (id) => `/api/invoices/single-invoice/${id}`,
    }),
    createTransfer: builder.mutation({
      query: (data) => ({
        url: `/api/transfers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getTransfers"],
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetInvoiceQuery,
  useCreateTransferMutation,
} = transferApi;
