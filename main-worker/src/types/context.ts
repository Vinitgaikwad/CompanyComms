// src/types/context.ts
import { PrismaClient } from "../generated/prisma/client";

export type Bindings = {
	DATABASE_URL: string;
};

export type Variables = {
	prisma: PrismaClient;
};

// src/types/context.ts
export type AppContext = {
	Bindings: {
		DATABASE_URL: string,
		SECRET: string
	};
	Variables: {
		prisma: PrismaClient;
		data: any;
		userLoginDetail: {
			email: string,

		}
	};
};
