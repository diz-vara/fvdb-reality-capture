window.BENCHMARK_DATA = {
  "lastUpdate": 1763015028685,
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
          "id": "378fa06a84c1a25f805e0c2878085acd299240ab",
          "message": "Add metadata about the commits to the benchmark results stored in gh-pages.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T04:42:06Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/378fa06a84c1a25f805e0c2878085acd299240ab"
        },
        "date": 1763011252828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2193.1484997557454,
            "unit": "iter/sec",
            "range": "stddev: 0.000010956360443677634",
            "extra": "mean: 455.9654761687919 usec\nrounds: 2182"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 722.2636879581208,
            "unit": "iter/sec",
            "range": "stddev: 0.000036334032026496074",
            "extra": "mean: 1.3845358927389178 msec\nrounds: 895"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 543.7588555785758,
            "unit": "iter/sec",
            "range": "stddev: 0.000026532603439766447",
            "extra": "mean: 1.8390505087700502 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 173.5539680237477,
            "unit": "iter/sec",
            "range": "stddev: 0.0001145514438320968",
            "extra": "mean: 5.761896494715512 msec\nrounds: 378"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.75223902801866,
            "unit": "iter/sec",
            "range": "stddev: 0.00005120791206133877",
            "extra": "mean: 8.948366571423046 msec\nrounds: 112"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 130.2899423309274,
            "unit": "iter/sec",
            "range": "stddev: 0.00014811858987764159",
            "extra": "mean: 7.675189520462519 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 63.03326044536887,
            "unit": "iter/sec",
            "range": "stddev: 0.00016736520410947742",
            "extra": "mean: 15.864640238096253 msec\nrounds: 63"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.90527899135231,
            "unit": "iter/sec",
            "range": "stddev: 0.00032765509794174466",
            "extra": "mean: 38.6021706361016 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.59611482528533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005809008608474554",
            "extra": "mean: 13.587673783785544 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 81.41707638750599,
            "unit": "iter/sec",
            "range": "stddev: 0.00019576048794804656",
            "extra": "mean: 12.282435631076739 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 40.269227799521275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003334090298952708",
            "extra": "mean: 24.83285760974756 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 19.2000839289163,
            "unit": "iter/sec",
            "range": "stddev: 0.0008866040916294959",
            "extra": "mean: 52.0831056625721 msec\nrounds: 326"
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
          "id": "378fa06a84c1a25f805e0c2878085acd299240ab",
          "message": "Add metadata about the commits to the benchmark results stored in gh-pages.\n\nSigned-off-by: Mark Harris <mharris@nvidia.com>",
          "timestamp": "2025-11-13T04:42:06Z",
          "url": "https://github.com/openvdb/fvdb-reality-capture/commit/378fa06a84c1a25f805e0c2878085acd299240ab"
        },
        "date": 1763015028253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00000664]",
            "value": 2167.3713730243535,
            "unit": "iter/sec",
            "range": "stddev: 0.000012875459064279277",
            "extra": "mean: 461.388395383574 usec\nrounds: 2165"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00000664]",
            "value": 712.1688105412595,
            "unit": "iter/sec",
            "range": "stddev: 0.000044645874074910565",
            "extra": "mean: 1.4041614645269067 msec\nrounds: 874"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00000664]",
            "value": 534.9952561712369,
            "unit": "iter/sec",
            "range": "stddev: 0.000050134808878047264",
            "extra": "mean: 1.8691754524266817 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00000664]",
            "value": 168.99464582497632,
            "unit": "iter/sec",
            "range": "stddev: 0.00010614921610270869",
            "extra": "mean: 5.917347233803347 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00006640]",
            "value": 111.81700991573169,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145428132816923",
            "extra": "mean: 8.94318315928522 msec\nrounds: 113"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00006640]",
            "value": 128.5845361320006,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345366361838491",
            "extra": "mean: 7.776984932102826 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00006640]",
            "value": 62.33381935714353,
            "unit": "iter/sec",
            "range": "stddev: 0.00017108453179353337",
            "extra": "mean: 16.042655661294702 msec\nrounds: 62"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00006640]",
            "value": 25.559341055148373,
            "unit": "iter/sec",
            "range": "stddev: 0.0003464032401874929",
            "extra": "mean: 39.12463931845269 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_project_gaussians[garden-00016600]",
            "value": 73.43885182386308,
            "unit": "iter/sec",
            "range": "stddev: 0.00007147562791872052",
            "extra": "mean: 13.6167706216107 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_render_gaussians[garden-00016600]",
            "value": 80.13484576463344,
            "unit": "iter/sec",
            "range": "stddev: 0.00019681014877335318",
            "extra": "mean: 12.478965803929182 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_forward[garden-00016600]",
            "value": 39.88220850027963,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089766678204085",
            "extra": "mean: 25.073837121958494 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_3dgs.py::test_backward[garden-00016600]",
            "value": 18.933646411027336,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248529919357503",
            "extra": "mean: 52.8160280535069 msec\nrounds: 299"
          }
        ]
      }
    ]
  }
}