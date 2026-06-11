export async function POST() {
  return Response.json(
    {
      ok: false,
      error:
        "Kontaktų forma šiame projekte siunčiama per /contact.php endpointą.",
    },
    { status: 410 }
  );
}
