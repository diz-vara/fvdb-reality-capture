window.BENCHMARK_DATA = {
  "lastUpdate": 1762937678667,
  "repoUrl": "https://github.com/openvdb/fvdb-reality-capture",
  "entries": {
    "fvdb-reality-capture Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "7ca7ab7ce06f9d07d97c6db1b04839b8220264e4",
          "message": "typo in instance-type\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-12T05:58:47Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/7ca7ab7ce06f9d07d97c6db1b04839b8220264e4"
        },
        "date": 1762928299482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 3234.547211068627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000101114513384793",
            "extra": "mean: 309.16228292417503 usec\nrounds: 3174"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 2143.8829936680104,
            "unit": "iter/sec",
            "range": "stddev: 0.000010199020901621756",
            "extra": "mean: 466.44336605752954 usec\nrounds: 2139"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 1275.0670634923308,
            "unit": "iter/sec",
            "range": "stddev: 0.000016353840834989747",
            "extra": "mean: 784.2724736854711 usec\nrounds: 1273"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 334.204714972447,
            "unit": "iter/sec",
            "range": "stddev: 0.00004566675154444203",
            "extra": "mean: 2.9921780130553923 msec\nrounds: 383"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 315.61952161355316,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066051635649777",
            "extra": "mean: 3.16837182594937 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 471.01344677388335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004437478194483419",
            "extra": "mean: 2.1230816377946513 msec\nrounds: 508"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 194.93164147834958,
            "unit": "iter/sec",
            "range": "stddev: 0.000023569376994848338",
            "extra": "mean: 5.130003484380789 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 68.6509065519083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735053757063137",
            "extra": "mean: 14.566450032875826 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 196.6407613934972,
            "unit": "iter/sec",
            "range": "stddev: 0.00003676308485518168",
            "extra": "mean: 5.085415622445152 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 294.82207618255734,
            "unit": "iter/sec",
            "range": "stddev: 0.00005705089660535557",
            "extra": "mean: 3.391876256175566 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 121.72471011408113,
            "unit": "iter/sec",
            "range": "stddev: 0.00004279682938546113",
            "extra": "mean: 8.215258833336256 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 52.43365092579775,
            "unit": "iter/sec",
            "range": "stddev: 0.00006558819366492882",
            "extra": "mean: 19.071721734867644 msec\nrounds: 347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "committer": {
            "name": "Mark Harris",
            "username": "harrism",
            "email": "mharris@nvidia.com"
          },
          "id": "b575fbe9946005ae731add45e9cb2f63c6cf3606",
          "message": "Remove redundant cleanup that causes automatic micromamba cleanup to fail.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-12T08:36:29Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/b575fbe9946005ae731add45e9cb2f63c6cf3606"
        },
        "date": 1762937678188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 3279.1106011113325,
            "unit": "iter/sec",
            "range": "stddev: 0.00000811229002052827",
            "extra": "mean: 304.9607413855108 usec\nrounds: 3105"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 2149.176331595548,
            "unit": "iter/sec",
            "range": "stddev: 0.000008379624769744703",
            "extra": "mean: 465.2945341425755 usec\nrounds: 2138"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 1273.0081703993196,
            "unit": "iter/sec",
            "range": "stddev: 0.000011047451303000629",
            "extra": "mean: 785.5409126606925 usec\nrounds: 1248"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 337.62963090802674,
            "unit": "iter/sec",
            "range": "stddev: 0.000045846372916800326",
            "extra": "mean: 2.961825350786255 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 315.9723012360756,
            "unit": "iter/sec",
            "range": "stddev: 0.000015223258252885577",
            "extra": "mean: 3.1648343734182562 msec\nrounds: 316"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 475.07759980171153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003938118194694874",
            "extra": "mean: 2.104919281433983 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 195.2232937340445,
            "unit": "iter/sec",
            "range": "stddev: 0.000028106116144498145",
            "extra": "mean: 5.122339557298498 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 68.20132103638768,
            "unit": "iter/sec",
            "range": "stddev: 0.00005978465532499138",
            "extra": "mean: 14.662472585633152 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 196.55749868461555,
            "unit": "iter/sec",
            "range": "stddev: 0.000040135831689005664",
            "extra": "mean: 5.087569829144704 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 299.0085519989907,
            "unit": "iter/sec",
            "range": "stddev: 0.00007359728282874467",
            "extra": "mean: 3.34438594921317 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 120.89781414502134,
            "unit": "iter/sec",
            "range": "stddev: 0.00006461465965934373",
            "extra": "mean: 8.271448140497094 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 51.8772912286475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680352761614751",
            "extra": "mean: 19.27625703494294 msec\nrounds: 372"
          }
        ]
      }
    ]
  }
}