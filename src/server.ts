import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type"],
	credentials: true,
});

const teams = [
	{
		id: 1,
		name: "ferrari",
		base: "Maranello, Italy",
	},
	{
		id: 2,
		name: "mercedes",
		base: "Brackley, United Kingdom",
	},
	{
		id: 3,
		name: "redbull",
		base: "Milton Keynes, United Kingdom",
	},
	{
		id: 4,
		name: "mclaren",
		base: "Woking, United Kingdom",
	},
	{
		id: 5,
		name: "alpine",
		base: "Enstone, United Kingdom",
	},
	{
		id: 6,
		name: "aston martin",
		base: "Silverstone, United Kingdom",
	},
	{
		id: 7,
		name: "haas",
		base: "Kannapolis, United States",
	},
	{
		id: 8,
		name: "alphatauri",
		base: "Faenza, Italy",
	},
	{
		id: 9,
		name: "alfa romeo",
		base: "Hinwil, Switzerland",
	},
	{
		id: 10,
		name: "williams",
		base: "Grove, United Kingdom",
	},
];

const pilots = [
	{
		id: 1,
		name: "alonso",
		team: "aston martin",
	},
	{
		id: 2,
		name: "bottas",
		team: "alfa romeo",
	},
	{
		id: 3,
		name: "hamilton",
		team: "mercedes",
	},
	{
		id: 4,
		name: "verstappen",
		team: "red bull",
	},
	{
		id: 5,
		name: "leclerc",
		team: "ferrari",
	},
	{
		id: 6,
		name: "perez",
		team: "red bull",
	},
	{
		id: 7,
		name: "sainz",
		team: "ferrari",
	},
	{
		id: 8,
		name: "russell",
		team: "mercedes",
	},
	{
		id: 9,
		name: "norris",
		team: "mclaren",
	},
	{
		id: 10,
		name: "gasly",
		team: "alpine",
	},
	{
		id: 11,
		name: "ocon",
		team: "alpine",
	},
	{
		id: 12,
		name: "stroll",
		team: "aston martin",
	},
	{
		id: 13,
		name: "tsunoda",
		team: "alphatauri",
	},
	{
		id: 14,
		name: "piastri",
		team: "mclaren",
	},
	{
		id: 15,
		name: "zhou",
		team: "alfa romeo",
	},
	{
		id: 16,
		name: "hulkenberg",
		team: "haas",
	},
	{
		id: 17,
		name: "magnussen",
		team: "haas",
	},
	{
		id: 18,
		name: "sargeant",
		team: "williams",
	},
	{
		id: 19,
		name: "albon",
		team: "williams",
	},
	{
		id: 20,
		name: "ricciardo",
		team: "alphatauri",
	},
];

server.get("/api/v1/teams", async (resquest, response) => {
	response.type("application/json").code(200);

	return { teams: teams };
});

server.get("/api/v1/pilots", async (resquest, response) => {
	response.type("application/json").code(200);

	return { pilots: pilots };
});

interface PilotParams {
	id: string;
	name: string;
	team: string;
}

server.get<{ Params: PilotParams }>(
	"/api/v1/pilots/:id",
	async (resquest, response) => {
		response.type("application/json").code(200);
		const id = parseInt(resquest.params.id);

		const pilot = pilots.find((pilot) => pilot.id === id);
		if (!pilot) {
			response.code(404);
			return { error: "Pilot not found" };
		}
		response.type("application/json").code(200);
		return { pilot };
	}
);

server.listen({ port: 3000 }, (err, address) => {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}

	server.log.info(`server listening on ${address}`);
});
