dmx.config({
  "rechargehistory": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvRechTrans": {
      "meta": [
        {
          "name": "table_id",
          "type": "text"
        },
        {
          "name": "pay_ref_id",
          "type": "number"
        },
        {
          "name": "ac_holder_user_id",
          "type": "number"
        },
        {
          "name": "old_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "new_balance",
          "type": "text"
        },
        {
          "name": "transaction_type",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "text"
        },
        {
          "name": "crdr_type",
          "type": "text"
        },
        {
          "name": "remarks",
          "type": "text"
        },
        {
          "name": "transaction_by",
          "type": "number"
        },
        {
          "name": "recharge_number",
          "type": "text"
        },
        {
          "name": "comm_amt",
          "type": "text"
        },
        {
          "name": "charge_amt",
          "type": "text"
        },
        {
          "name": "tr_mode",
          "type": "text"
        },
        {
          "name": "tr_type",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "tr_id",
          "type": "text"
        },
        {
          "name": "operator_ref",
          "type": "text"
        },
        {
          "name": "api_ref",
          "type": "text"
        },
        {
          "name": "dtcommamt",
          "type": "text"
        },
        {
          "name": "dtchargeamt",
          "type": "text"
        },
        {
          "name": "mdtcommamt",
          "type": "text"
        },
        {
          "name": "mdtchargeamt",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "service_name",
          "type": "text"
        },
        {
          "name": "parent_id",
          "type": "number"
        },
        {
          "name": "parent_fname",
          "type": "text"
        },
        {
          "name": "parent_mobile",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "netamt",
          "type": "text"
        },
        {
          "name": "api_response_id",
          "type": "number"
        },
        {
          "name": "api_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "ddRechargeTrans": {
      "meta": [
        {
          "name": "table_id",
          "type": "text"
        },
        {
          "name": "pay_ref_id",
          "type": "number"
        },
        {
          "name": "ac_holder_user_id",
          "type": "number"
        },
        {
          "name": "old_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "new_balance",
          "type": "text"
        },
        {
          "name": "transaction_type",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "text"
        },
        {
          "name": "crdr_type",
          "type": "text"
        },
        {
          "name": "remarks",
          "type": "text"
        },
        {
          "name": "transaction_by",
          "type": "number"
        },
        {
          "name": "recharge_number",
          "type": "text"
        },
        {
          "name": "comm_amt",
          "type": "text"
        },
        {
          "name": "charge_amt",
          "type": "text"
        },
        {
          "name": "tr_mode",
          "type": "text"
        },
        {
          "name": "tr_type",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "tr_id",
          "type": "text"
        },
        {
          "name": "operator_ref",
          "type": "text"
        },
        {
          "name": "api_ref",
          "type": "text"
        },
        {
          "name": "dtcommamt",
          "type": "text"
        },
        {
          "name": "dtchargeamt",
          "type": "text"
        },
        {
          "name": "mdtcommamt",
          "type": "text"
        },
        {
          "name": "mdtchargeamt",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "service_name",
          "type": "text"
        },
        {
          "name": "parent_id",
          "type": "number"
        },
        {
          "name": "parent_fname",
          "type": "text"
        },
        {
          "name": "parent_mobile",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "netamt",
          "type": "text"
        },
        {
          "name": "api_response_id",
          "type": "number"
        },
        {
          "name": "api_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "dvPaymentLoad": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "opening_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "closing_balance",
          "type": "text"
        },
        {
          "name": "reason",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "datetime"
        },
        {
          "name": "tr_by",
          "type": "text"
        },
        {
          "name": "tr_by_mobile",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "opening_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "closing_balance",
          "type": "text"
        },
        {
          "name": "reason",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "datetime"
        },
        {
          "name": "tr_by",
          "type": "text"
        },
        {
          "name": "tr_by_mobile",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "searchtransactions": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ],
    "dvSearchtrans": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "number"
        },
        {
          "name": "old_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "new_balance",
          "type": "text"
        },
        {
          "name": "transaction_type",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "text"
        },
        {
          "name": "ip_address",
          "type": "text"
        },
        {
          "name": "crdr_type",
          "type": "text"
        },
        {
          "name": "pay_ref_id",
          "type": "number"
        },
        {
          "name": "remarks",
          "type": "text"
        },
        {
          "name": "created_by",
          "type": "number"
        },
        {
          "name": "created_on",
          "type": "datetime"
        },
        {
          "name": "updated_by",
          "type": "number"
        },
        {
          "name": "updated_on",
          "type": "datetime"
        },
        {
          "name": "deleted_by",
          "type": "number"
        },
        {
          "name": "deleted_on",
          "type": "datetime"
        },
        {
          "name": "netamt",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "ddSrarchTrans": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "number"
        },
        {
          "name": "old_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "new_balance",
          "type": "text"
        },
        {
          "name": "transaction_type",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "text"
        },
        {
          "name": "ip_address",
          "type": "text"
        },
        {
          "name": "crdr_type",
          "type": "text"
        },
        {
          "name": "pay_ref_id",
          "type": "number"
        },
        {
          "name": "remarks",
          "type": "text"
        },
        {
          "name": "created_by",
          "type": "number"
        },
        {
          "name": "created_on",
          "type": "datetime"
        },
        {
          "name": "updated_by",
          "type": "number"
        },
        {
          "name": "updated_on",
          "type": "datetime"
        },
        {
          "name": "deleted_by",
          "type": "number"
        },
        {
          "name": "deleted_on",
          "type": "datetime"
        },
        {
          "name": "netamt",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "user_number",
          "type": "text"
        },
        {
          "name": "opening_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "net_amt",
          "type": "text"
        },
        {
          "name": "closing_balance",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "datetime"
        },
        {
          "name": "comm_amt",
          "type": "text"
        },
        {
          "name": "charge_amt",
          "type": "text"
        },
        {
          "name": "tr_type",
          "type": "text"
        },
        {
          "name": "reason",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "service_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "paymetload": {
    "dvLoadTrans": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "opening_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "closing_balance",
          "type": "text"
        },
        {
          "name": "reason",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "datetime"
        },
        {
          "name": "tr_by",
          "type": "text"
        },
        {
          "name": "tr_by_mobile",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "paymentdebit": {
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "opening_balance",
          "type": "text"
        },
        {
          "name": "amount",
          "type": "text"
        },
        {
          "name": "closing_balance",
          "type": "text"
        },
        {
          "name": "reason",
          "type": "text"
        },
        {
          "name": "tr_date",
          "type": "datetime"
        },
        {
          "name": "tr_by",
          "type": "text"
        },
        {
          "name": "tr_by_mobile",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "operatorwisecomm": {
    "tableRepeat1": {
      "meta": [
        {
          "name": "op_id",
          "type": "number"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "tr_count",
          "type": "text"
        },
        {
          "name": "total",
          "type": "text"
        },
        {
          "name": "comm_amt_total",
          "type": "number"
        },
        {
          "name": "charge_amt_total",
          "type": "number"
        }
      ],
      "outputType": "array"
    }
  },
  "statement": {
    "tableRepeat1": {
      "meta": [],
      "outputType": "array"
    }
  },
  "commision": {
    "dvCommision": {
      "meta": [
        {
          "name": "op_id",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "service_name",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "number"
        },
        {
          "name": "comm_per",
          "type": "text"
        },
        {
          "name": "comm_val",
          "type": "text"
        },
        {
          "name": "service_charge_per",
          "type": "text"
        },
        {
          "name": "service_charge_val",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "ddCommision": {
      "meta": [
        {
          "name": "op_id",
          "type": "text"
        },
        {
          "name": "operator_name",
          "type": "text"
        },
        {
          "name": "service_name",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "number"
        },
        {
          "name": "comm_per",
          "type": "text"
        },
        {
          "name": "comm_val",
          "type": "text"
        },
        {
          "name": "service_charge_per",
          "type": "text"
        },
        {
          "name": "service_charge_val",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "op_id"
        },
        {
          "type": "text",
          "name": "operator_name"
        },
        {
          "type": "text",
          "name": "service_name"
        },
        {
          "type": "number",
          "name": "scheme_id"
        },
        {
          "type": "text",
          "name": "comm_per"
        },
        {
          "type": "text",
          "name": "comm_val"
        },
        {
          "type": "text",
          "name": "service_charge_per"
        },
        {
          "type": "text",
          "name": "service_charge_val"
        },
        {
          "type": "text",
          "name": "our_code"
        }
      ],
      "outputType": "array"
    },
    "repeatCommisionList": {
      "meta": [
        {
          "type": "number",
          "name": "op_id"
        },
        {
          "type": "text",
          "name": "operator_name"
        },
        {
          "type": "text",
          "name": "service_name"
        },
        {
          "type": "number",
          "name": "scheme_id"
        },
        {
          "type": "text",
          "name": "comm_per"
        },
        {
          "type": "text",
          "name": "comm_val"
        },
        {
          "type": "text",
          "name": "service_charge_per"
        },
        {
          "type": "text",
          "name": "service_charge_val"
        },
        {
          "type": "text",
          "name": "our_code"
        }
      ],
      "outputType": "array"
    }
  },
  "user": {
    "ddUsers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_lname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "user_email",
          "type": "text"
        },
        {
          "name": "user_type",
          "type": "number"
        },
        {
          "name": "md_id",
          "type": "text"
        },
        {
          "name": "ds_id",
          "type": "text"
        },
        {
          "name": "u_status",
          "type": "text"
        },
        {
          "name": "user_tpin",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "text"
        },
        {
          "name": "balance_amt",
          "type": "text"
        },
        {
          "name": "aeps_balance",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ]
  },
  "manageusers": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "dvUsers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_lname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "user_email",
          "type": "text"
        },
        {
          "name": "user_type",
          "type": "number"
        },
        {
          "name": "md_id",
          "type": "text"
        },
        {
          "name": "ds_id",
          "type": "text"
        },
        {
          "name": "u_status",
          "type": "text"
        },
        {
          "name": "user_tpin",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "text"
        },
        {
          "name": "balance_amt",
          "type": "text"
        },
        {
          "name": "aeps_balance",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "ddUsers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_lname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "user_email",
          "type": "text"
        },
        {
          "name": "user_type",
          "type": "number"
        },
        {
          "name": "md_id",
          "type": "text"
        },
        {
          "name": "ds_id",
          "type": "text"
        },
        {
          "name": "u_status",
          "type": "text"
        },
        {
          "name": "user_tpin",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "text"
        },
        {
          "name": "balance_amt",
          "type": "text"
        },
        {
          "name": "aeps_balance",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "tableRepeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "user_id",
          "type": "text"
        },
        {
          "name": "user_fname",
          "type": "text"
        },
        {
          "name": "user_lname",
          "type": "text"
        },
        {
          "name": "user_mobile",
          "type": "text"
        },
        {
          "name": "user_email",
          "type": "text"
        },
        {
          "name": "user_type",
          "type": "number"
        },
        {
          "name": "md_id",
          "type": "text"
        },
        {
          "name": "ds_id",
          "type": "text"
        },
        {
          "name": "u_status",
          "type": "text"
        },
        {
          "name": "user_tpin",
          "type": "text"
        },
        {
          "name": "scheme_id",
          "type": "text"
        },
        {
          "name": "balance_amt",
          "type": "text"
        },
        {
          "name": "aeps_balance",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "users": {
    "repeat1": {
      "meta": [],
      "outputType": "array"
    }
  },
  "loginhistory": {
    "tableRepeat1": {
      "meta": [
        {
          "name": "ip_address",
          "type": "text"
        },
        {
          "name": "login_time",
          "type": "datetime"
        },
        {
          "name": "logout_time",
          "type": "datetime"
        }
      ],
      "outputType": "array"
    }
  },
  "login": {},
  "apitoken": {
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "ip_address"
        },
        {
          "type": "text",
          "name": "call_back_url"
        },
        {
          "type": "text",
          "name": "api_token"
        },
        {
          "type": "number",
          "name": "status"
        }
      ],
      "outputType": "array"
    },
    "ddFetchToken": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "ip_address"
        },
        {
          "type": "text",
          "name": "call_back_url"
        },
        {
          "type": "text",
          "name": "api_token"
        },
        {
          "type": "number",
          "name": "status"
        }
      ],
      "outputType": "array"
    },
    "dvFetchToken": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "ip_address"
        },
        {
          "type": "text",
          "name": "call_back_url"
        },
        {
          "type": "text",
          "name": "api_token"
        },
        {
          "type": "number",
          "name": "status"
        }
      ],
      "outputType": "array"
    }
  },
  "managepaymentrequest": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "sort"
      }
    ],
    "dvManagePayReq": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "pay_user_id"
        },
        {
          "type": "text",
          "name": "req_user_id"
        },
        {
          "type": "text",
          "name": "amount"
        },
        {
          "type": "date",
          "name": "tr_date"
        },
        {
          "type": "time",
          "name": "tr_time"
        },
        {
          "type": "text",
          "name": "tr_no"
        },
        {
          "type": "text",
          "name": "bank_name"
        },
        {
          "type": "text",
          "name": "branch_name"
        },
        {
          "type": "text",
          "name": "cheque_no"
        },
        {
          "type": "text",
          "name": "utr_no"
        },
        {
          "type": "text",
          "name": "payment_mode"
        },
        {
          "type": "text",
          "name": "cash_type"
        },
        {
          "type": "text",
          "name": "remarks"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "response_time"
        },
        {
          "type": "datetime",
          "name": "request_time"
        },
        {
          "type": "text",
          "name": "req_user_name"
        },
        {
          "type": "text",
          "name": "req_user_mobile"
        }
      ],
      "outputType": "array"
    },
    "ddManagePayReq": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "pay_user_id"
        },
        {
          "type": "text",
          "name": "req_user_id"
        },
        {
          "type": "text",
          "name": "amount"
        },
        {
          "type": "date",
          "name": "tr_date"
        },
        {
          "type": "time",
          "name": "tr_time"
        },
        {
          "type": "text",
          "name": "tr_no"
        },
        {
          "type": "text",
          "name": "bank_name"
        },
        {
          "type": "text",
          "name": "branch_name"
        },
        {
          "type": "text",
          "name": "cheque_no"
        },
        {
          "type": "text",
          "name": "utr_no"
        },
        {
          "type": "text",
          "name": "payment_mode"
        },
        {
          "type": "text",
          "name": "cash_type"
        },
        {
          "type": "text",
          "name": "remarks"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "response_time"
        },
        {
          "type": "datetime",
          "name": "request_time"
        },
        {
          "type": "text",
          "name": "req_user_name"
        },
        {
          "type": "text",
          "name": "req_user_mobile"
        }
      ],
      "outputType": "array"
    }
  },
  "bbps": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "service_name"
        },
        {
          "type": "text",
          "name": "service_type"
        }
      ],
      "outputType": "array"
    },
    "repeatOp": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "operator_name"
        },
        {
          "type": "number",
          "name": "min_amount"
        },
        {
          "type": "text",
          "name": "max_amount"
        },
        {
          "type": "text",
          "name": "image"
        }
      ],
      "outputType": "array"
    },
    "dvOpBBPS": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "operator_name"
        },
        {
          "type": "number",
          "name": "min_amount"
        },
        {
          "type": "text",
          "name": "max_amount"
        },
        {
          "type": "text",
          "name": "image"
        }
      ],
      "outputType": "array"
    }
  }
});
