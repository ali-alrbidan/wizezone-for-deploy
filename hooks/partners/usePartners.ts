"use client";

import {useEffect, useState} from "react";
import { PartnersService,Partner } from "@/services/api/partners.service";

export function usePartners()
{
    const [partners,setPartners] = useState<Partner[]>([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        PartnersService.getAll()
        .then(setPartners)
        .catch((err) => setError(err.Message))
        .finally(() => setLoading(false));
    }, []);

    return {partners, loading, error};

}