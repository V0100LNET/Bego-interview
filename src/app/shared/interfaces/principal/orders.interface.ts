export interface UpcomingOrders {
    status: number;
    result: Result[];
}

export interface Result {
    _id:              string;
    status:           number;
    order_number:     string;
    manager:          string;
    driver:           string;
    version:          string;
    type:             string;
    destinations:     Destination[];
    start_date:       number;
    end_date:         number;
    is_today:         boolean;
    status_string:    string;
    status_class:     string;
    driver_thumbnail: null;
}

export interface Destination {
    address:         string;
    start_date:      number;
    end_date:        number;
    nickname:        string;
    show_navigation: boolean;
}

export interface OrderDetail {
    status: number;
    result: ResultAllOrder;
}

export interface ResultAllOrder {
    _id:                   string;
    stamp:                 boolean;
    reference_number:      string;
    status:                number;
    completion_percentage: number;
    cargo:                 Cargo;
    user_id:               string;
    order_number:          string;
    route:                 Route;
    created:               number;
    distance_mts:          number;
    manager:               Driver;
    bego_order:            boolean;
    invoice:               Invoice;
    pricing:               Pricing;
    driver:                Driver;
    trailer:               Trailer;
    truck:                 Truck;
    version:               string;
    add_ons:               AddOns;
    ETA:                   number;
    map:                   Map;
    stampedPercentage:     number;
    start_date:            number;
    end_date:              number;
    status_list:           StatusList;
    destinations:          DestinationAll[];
}

export interface AddOns {
    cargo_value:          number;
    insurance:            boolean;
    cruce:                boolean;
    customs_agent:        boolean;
    min_insurance:        boolean;
    insurance_percentage: number;
}

export interface Cargo {
    "53_48":            string;
    type:               string;
    required_units:     number;
    description:        string;
    hazardous_type:     string;
    weigth:             number[];
    cargo_goods:        string;
    hazardous_material: string;
    packaging:          string;
    unit_type:          string;
    weight_unit:        string;
}

export interface DestinationAll {
    lat:               number;
    lng:               number;
    address:           string;
    startDate:         number;
    zip_code:          number;
    place_id_pickup?:  string;
    contact_info:      ContactInfo;
    geometry:          Geometry;
    raw_address:       string;
    evidence:          Evidence;
    status:            number;
    status_string:     string;
    status_class:      string;
    endDate?:          number;
    place_id_dropoff?: string;
}

export interface ContactInfo {
    name:         string;
    telephone:    string;
    email:        string;
    country_code: string;
    rfc:          string;
}

export interface Evidence {
    pictures:    any[];
    extra_notes: string;
    signature:   Signature;
}

export interface Signature {
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Driver {
    _id:                string;
    nickname:           string;
    raw_nickname:       string;
    email:              string;
    telephone:          string;
    raw_telephone:      string;
    country_code:       string;
    language:           string;
    date_created:       number;
    full_documentation: boolean;
    verified:           boolean;
    allow_login:        boolean;
    availability:       number;
    mood:               number;
    connected:          boolean;
    active_sessions:    number;
    location:           Location;
    role:               number;
    test:               boolean;
    version:            string;
    thumbnail?:         string;
    tags?:              string[];
    cer?:               Cer;
    key?:               Cer;
    key_pswd?:          string;
    place_id?:          string;
}

export interface Cer {
    ETag:     string;
    Key:      string;
    Bucket:   string;
    Location: string;
}

export interface Location {
    lat:      number;
    lng:      number;
    geometry: Geometry;
}

export interface Invoice {
    series_id:    string;
    fullname:     string;
    phonenumber:  null;
    country_code: null;
    email:        null;
    address:      string;
    company:      null;
    rfc:          string;
    cfdi:         string;
    receiver:     Receiver;
}

export interface Receiver {
    address:  Address;
    branch:   null;
    cfdi:     string;
    rfc:      string;
    company:  string;
    place_id: string;
}

export interface Address {
    place_id: string;
}

export interface Map {
    original_url:  string;
    thumbnail_url: string;
}

export interface Pricing {
    deferred_payment: boolean;
    subtotal:         number;
    insurance:        number;
    customs:          number;
    cruce:            number;
    taxes:            number;
    extras:           number;
    driver_earnings:  number;
    total:            number;
    pre_taxes:        number;
    single:           number;
}

export interface Route {
    route:      string;
    single:     number;
    pickup:     string;
    dropoff:    string;
    status:     number;
    end_date:   number;
    start_date: number;
    stay:       string;
}

export interface StatusList {
    pickup:  Dropoff[];
    dropoff: Dropoff[];
}

export interface Dropoff {
    active: boolean;
    status: string;
}

export interface Trailer {
    _id:        string;
    attributes: TrailerAttributes;
    active:     boolean;
    thumbnail:  string;
}

export interface TrailerAttributes {
    plates:         string;
    trailer_number: string;
    type:           string;
}

export interface Truck {
    _id:        string;
    attributes: TruckAttributes;
    active:     boolean;
    thumbnail:  string;
}

export interface TruckAttributes {
    plates:              string;
    year:                string;
    brand:               string;
    color:               string;
    caat:                string;
    colorName:           string;
    sct_permission:      string;
    sct_permission_text: string;
    sct_number:          string;
    truck_settings:      string;
    truck_settings_text: string;
    insurer:             string;
    policy_number:       string;
}

export interface ActiveDataPage {
    page: string
    pickupDropoff: "pickup" | "dropoff"
}
