export interface LocationType {
  lat: number
  lng: number
  address: string
  name?: string
}

export const locations: LocationType[] = [
  {
    lat: -20.52604,
    lng: -47.42596,
    address: "Rua Manoel Francisco Mello 469, vila São Sebastião, Franca - SP",
    name: "Unidade Vila São Sebastião"
  },
  {
    lat: -20.52746,
    lng: -47.37914,
    address: "Rua São Paulo 1306, vila Aparecida, Franca - SP",
    name: "Unidade Vila Aparecida"
  }
]
