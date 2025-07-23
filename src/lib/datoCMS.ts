/** @format */

import { gql, GraphQLClient } from 'graphql-request';

interface RequestProps {
	query: string;
	variables?: any;
	revalidate: number;
}

export async function request({ query, variables, revalidate }: RequestProps) {
	const endpoint = process.env.NEXT_DATOCMS_ENDPOINT || '';
	const token = process.env.NEXT_DATOCMS_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		method: 'POST',
		next: { revalidate: revalidate },
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	});

	return graphQLClient.request(query, variables);
}

export const queryGallery = gql`
	query {
		allGallerySigas {
			titleGallerySiga
			descriptionGallerySiga
			imageGallerySiga {
				url
			}
			id
		}
	}
`;

export interface allGallerySigas {
	titleGallerySiga: string;
	descriptionGallerySiga: string;
	imageGallerySiga: {
		url: string;
	};
	id: string;
}
