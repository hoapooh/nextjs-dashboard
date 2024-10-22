import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from "next"
import { fetchCustomersFormatted } from "@/app/lib/data"
import { Suspense } from "react"
import { InvoicesTableSkeleton } from "@/app/ui/skeletons"

export const metadata: Metadata = {
	title: "Customers",
}

export default async function Page() {
	const allCustomers = await fetchCustomersFormatted()

	console.log(allCustomers)

	return (
		<Suspense key={"customer-table"} fallback={<InvoicesTableSkeleton />}>
			<CustomersTable customers={allCustomers} />
		</Suspense>
	)
}
