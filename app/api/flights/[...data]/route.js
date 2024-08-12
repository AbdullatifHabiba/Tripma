// return flights with  search params

export async function GET(request) {
    const { query } = request;
    const flights = await prisma.flight.findMany({
        where: {
            OR: [
                {
                    departure: {
                        contains: query.search
                    }
                },
                {
                    destination: {
                        contains: query.search
                    }
                }
            ]
        }
    });
    return NextResponse.json(flights);
}