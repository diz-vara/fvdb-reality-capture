window.BENCHMARK_DATA = {
  "lastUpdate": 1762928299912,
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
      }
    ]
  }
}